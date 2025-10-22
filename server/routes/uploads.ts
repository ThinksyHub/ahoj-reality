import express from "express";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import {randomUUID} from "crypto";

const router = express.Router();

// ✅ disable default body parser for file upload
router.post("/", (req, res) => {
    const form = formidable({multiples: false});

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error("Error parsing form:", err);
            return res.status(500).json({error: "Form parsing failed"});
        }

        const file = Array.isArray(files.file) ? files.file[0] : files.file;
        if (!file) return res.status(400).json({error: "No file uploaded"});

        const uploadDir = path.join(process.cwd(), "public", "properties");
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, {recursive: true});

        const ext = path.extname(file.originalFilename || "");
        const filename = `${Date.now()}-${randomUUID()}${ext}`;
        const newPath = path.join(uploadDir, filename);

        fs.copyFile(file.filepath, newPath, (err) => {
            if (err) {
                console.error("File copy error:", err);
                return res.status(500).json({error: "File saving failed"});
            }

            // Remove the temp file after copying
            fs.unlink(file.filepath, (unlinkErr) => {
                if (unlinkErr) console.warn("Could not delete temp file:", unlinkErr);
            });

            return res.json({
                message: "File uploaded successfully",
                filename,
                url: `/properties/${filename}`,
            });
        });

    });
});

router.delete("/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(process.cwd(), "public", "properties", filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === "ENOENT") {
                return res.status(404).json({ error: "File not found" });
            }
            console.error("File deletion error:", err);
            return res.status(500).json({ error: "Could not delete file" });
        }

        return res.json({ message: "File deleted successfully" });
    });
});

export default router;
