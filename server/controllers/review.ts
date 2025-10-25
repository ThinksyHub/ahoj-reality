import type { Request, Response } from "express";
import { db } from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

// 🟢 Get all reviews
export const getAllReviews = async (_req: Request, res: Response): Promise<void> => {
    try {
        const [rows] = await db.query<RowDataPacket[]>(
            "SELECT * FROM reviews ORDER BY id DESC"
        );
        res.json(rows);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error fetching reviews:", message);
        res.status(500).json({ error: message });
    }
};

// 🟢 Get single review
export const getReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const [rows] = await db.query<RowDataPacket[]>(
            "SELECT * FROM reviews WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            res.status(404).json({ message: "Recenzia nenájdená" });
            return;
        }

        res.json(rows[0]);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error fetching review:", message);
        res.status(500).json({ error: message });
    }
};

// 🟢 Create review
export const createReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, source, text, rating } = req.body;

        const [result] = await db.query<ResultSetHeader>(
            "INSERT INTO reviews (name, source, text, rating) VALUES (?, ?, ?, ?)",
            [name, source, text, rating]
        );

        res.status(201).json({
            message: "Recenzia vytvorená",
            id: result.insertId,
        });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error creating review:", message);
        res.status(500).json({ error: message });
    }
};

// 🟢 Update review
export const updateReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, source, text, rating } = req.body;

        const [result] = await db.query<ResultSetHeader>(
            "UPDATE reviews SET name=?, source=?, text=?, rating=? WHERE id=?",
            [name, source, text, rating, id]
        );

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Recenzia nenájdená" });
            return;
        }

        res.json({ message: "Recenzia aktualizovaná" });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error updating review:", message);
        res.status(500).json({ error: message });
    }
};

// 🟢 Delete review
export const deleteReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const [result] = await db.query<ResultSetHeader>(
            "DELETE FROM reviews WHERE id=?",
            [id]
        );

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Recenzia nenájdená" });
            return;
        }

        res.json({ message: "Recenzia vymazaná" });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error deleting review:", message);
        res.status(500).json({ error: message });
    }
};
