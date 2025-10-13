import type { Request, Response } from "express"
import { db } from '../db.js' 

export const getPartners = (_req: Request, res: Response) => {
    db.query("SELECT * FROM partners", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    })
}