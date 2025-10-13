import type { Request, Response } from "express";
import { db } from "../db.js"

export const getCities = (_req: Request, res: Response) => {
    db.query("SELECT * FROM cities", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};