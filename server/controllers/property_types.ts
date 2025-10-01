import type { Request, Response } from "express";
import { db } from "../db.ts";

export const getPropertyTypes = (_req: Request, res: Response) => {
    db.query("SELECT * FROM property_types", (err, results) => {
        if (err) return res.status(500).json({error: err.message});
        res.json(results);
    });
};