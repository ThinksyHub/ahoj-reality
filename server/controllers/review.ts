import type { Request, Response } from "express";
import { db } from "../db.js";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

export const getAllReviews = (_req: Request, res: Response) => {
    db.query<RowDataPacket[]>("SELECT * FROM reviews ORDER BY id DESC", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

export const getReview = (req: Request, res: Response) => {
    const { id } = req.params;
    db.query<RowDataPacket[]>("SELECT * FROM reviews WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!results.length) return res.status(404).json({ message: "Recenzia nenájdená" });
        res.json(results[0]);
    });
};

export const createReview = (req: Request, res: Response) => {
    const { name, source, text, rating } = req.body;

    db.query<ResultSetHeader>(
        "INSERT INTO reviews (name, source, text, rating) VALUES (?, ?, ?, ?)",
        [name, source, text, rating],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Recenzia vytvorená", id: result.insertId });
        }
    );
};

export const updateReview = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, source, text, rating } = req.body;

    db.query<ResultSetHeader>(
        "UPDATE reviews SET name=?, source=?, text=?, rating=? WHERE id=?",
        [name, source, text, rating, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: "Recenzia nenájdená" });
            res.json({ message: "Recenzia aktualizovaná" });
        }
    );
};

export const deleteReview = (req: Request, res: Response) => {
    const { id } = req.params;

    db.query<ResultSetHeader>(
        "DELETE FROM reviews WHERE id=?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: "Recenzia nenájdená" });
            res.json({ message: "Recenzia vymazaná" });
        }
    );
};
