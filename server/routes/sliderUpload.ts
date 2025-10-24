// routes/sliderUpload.ts
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

const uploadDir = path.join(process.cwd(),"public" ,"uploads/slider");
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
        const uniqueName = Date.now() + "_" + file.originalname;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

/**
 * 📤 POST /api/upload/slider
 * Upload a new slider image
 */
router.post("/", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "File is required" });
    res.status(201).json({ filename: req.file.filename });
});

/**
 * 🗑️ DELETE /api/upload/slider/:filename
 * Delete a specific slider image
 */
router.delete("/:filename", (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(uploadDir, filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === "ENOENT") {
                return res.status(404).json({ message: "File not found" });
            }
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "File deleted successfully" });
    });
});

/**
 * 📄 GET /api/upload/slider
 * Get a list of all uploaded slider images
 */
router.get("/", (_req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Failed to read slider directory" });
        }

        // Return only file names, sorted by modification time (latest first)
        const sortedFiles = files
            .map((file) => ({
                name: file,
                time: fs.statSync(path.join(uploadDir, file)).mtime.getTime(),
            }))
            .sort((a, b) => b.time - a.time)
            .map((f) => f.name);

        res.json(sortedFiles);
    });
});

export default router;
