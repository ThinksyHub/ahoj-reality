import type { Request, Response } from "express";
import { db } from "../db.js"; // the pool version from mysql2/promise
import type { RowDataPacket } from "mysql2";

export const getCities = async (_req: Request, res: Response) => {
    try {
        const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM cities");
        res.json(rows);
    } catch (err) {
        console.error("❌ Error fetching cities:");
        res.status(500).json({});
    }
};