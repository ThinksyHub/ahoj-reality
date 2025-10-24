import type { Request, Response } from "express";
import { db } from "../db.js";
import fs from "fs";
import path from "path";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

// Get all slider images
export const getAllSliderImages = (_req: Request, res: Response) => {
    db.query("SELECT * FROM slider ORDER BY id ASC", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const images = (results as RowDataPacket[]).map(row => row.filename);
        res.json(images);
    });
};

// Add new slider image (expects filename in body)
export const addSliderImage = (req: Request, res: Response) => {
    const { filename } = req.body;
    if (!filename) return res.status(400).json({ error: "Filename is required" });

    db.query<ResultSetHeader>(
        "INSERT INTO slider (filename) VALUES (?)",
        [filename],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Image added", id: result.insertId, filename });
        }
    );
};

// Delete slider image (removes DB record + local file)
export const deleteSliderImage = (req: Request, res: Response) => {
    const { filename } = req.params;
    if (!filename) return res.status(400).json({ error: "Filename is required" });

    // Delete file from uploads folder
    const filePath = path.join(process.cwd(), "uploads", filename);
    fs.unlink(filePath, (err) => {
        if (err && err.code !== "ENOENT") console.error("Failed to delete file:", err);
    });

    // Delete DB record
    db.query<ResultSetHeader>(
        "DELETE FROM slider WHERE filename = ?",
        [filename],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0)
                return res.status(404).json({ message: "Image not found" });
            res.json({ message: "Image deleted successfully" });
        }
    );
};
