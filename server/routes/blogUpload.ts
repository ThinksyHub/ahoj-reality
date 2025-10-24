import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// ✅ Save files into the public/blog directory
const uploadDir = path.join(process.cwd(), "public", "blog");
fs.mkdirSync(uploadDir, { recursive: true });

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});

const upload = multer({ storage });

// ✅ Upload blog image
router.post("/", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "File is required" });

    // Return accessible public URL for the uploaded file
    const fileUrl = `/blog/${req.file.filename}`;
    res.status(201).json({ filename: req.file.filename, url: fileUrl });
});

// ✅ Delete blog image
router.delete("/:filename", (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(uploadDir, filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === "ENOENT") return res.status(404).json({ message: "File not found" });
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "File deleted successfully" });
    });
});

export default router;
