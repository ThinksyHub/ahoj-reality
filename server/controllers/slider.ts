import type { Request, Response } from "express";
import { db } from "../db.js";
import fs from "fs/promises";
import path from "path";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

// 🟢 Get all slider images
export const getAllSliderImages = async (_req: Request, res: Response): Promise<void> => {
    try {
        const [rows] = await db.query<RowDataPacket[]>(
            "SELECT * FROM slider ORDER BY id ASC"
        );
        const images = rows.map((row) => row.filename as string);
        res.json(images);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error fetching slider images:", message);
        res.status(500).json({ error: message });
    }
};

// 🟢 Add new slider image
export const addSliderImage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { filename } = req.body;
        if (!filename) {
            res.status(400).json({ error: "Filename is required" });
            return;
        }

        const [result] = await db.query<ResultSetHeader>(
            "INSERT INTO slider (filename) VALUES (?)",
            [filename]
        );

        res.status(201).json({
            message: "Image added",
            id: result.insertId,
            filename,
        });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error adding slider image:", message);
        res.status(500).json({ error: message });
    }
};

// 🟢 Delete slider image
export const deleteSliderImage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { filename } = req.params;
        if (!filename) {
            res.status(400).json({ error: "Filename is required" });
            return;
        }

        // Delete file from uploads folder
        const filePath = path.join(process.cwd(), "uploads", filename);
        try {
            await fs.unlink(filePath);
            console.log("🗑️ File deleted:", filename);
        } catch (fileErr) {
                console.error("❌ Failed to delete file:", fileErr);
        }

        // Delete DB record
        const [result] = await db.query<ResultSetHeader>(
            "DELETE FROM slider WHERE filename = ?",
            [filename]
        );

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Image not found" });
            return;
        }

        res.json({ message: "Image deleted successfully" });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error deleting slider image:", message);
        res.status(500).json({ error: message });
    }
};