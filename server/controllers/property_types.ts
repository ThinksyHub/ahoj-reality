import type { Request, Response } from "express";
import { db } from "../db.js";
import type { RowDataPacket } from "mysql2";

export const getPropertyTypes = async (_req: Request, res: Response): Promise<void> => {
    try {
        const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM property_types");
        res.json(rows);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("❌ Error fetching property types:", message);
        res.status(500).json({ error: message });
    }
};