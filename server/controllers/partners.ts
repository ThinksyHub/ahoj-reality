import type { Request, Response } from "express";
import { db } from "../db.js"; // should export a mysql2/promise pool
import type { RowDataPacket } from "mysql2";

export const getPartners = async (_req: Request, res: Response) => {
    try {
        const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM partners");
        res.json(rows);
    } catch (err) {
        console.error("❌ Error fetching partners:");
        res.status(500).json({});
    }
};