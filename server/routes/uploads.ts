// server/routes/upload.ts
import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Upload folder inside Docker volume
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, "../../uploads")),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Single file upload
router.post("/featured", upload.single("image"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    res.json({ path: `/uploads/${req.file.filename}` });
});

// Multiple files upload (additional images)
router.post("/gallery", upload.array("images", 20), (req, res) => {
    if (!req.files) return res.status(400).json({ error: "No files uploaded" });
    const paths = (req.files as Express.Multer.File[]).map((f) => `/uploads/${f.filename}`);
    res.json({ paths });
});

export default router;
