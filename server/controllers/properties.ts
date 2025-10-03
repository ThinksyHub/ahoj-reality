import type { Request, Response } from "express";
import { db } from "../db.ts";
import type { RowDataPacket } from "mysql2";

export const getAllProperties = (_req: Request, res: Response) => {
  db.query("SELECT * FROM properties ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const getProperty = (req: Request, res: Response) => {
  const { id } = req.params;
  db.query<RowDataPacket[]>("SELECT * FROM properties WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (!results.length) return res.status(404).json({ message: "Property not found" });

    res.json(results[0]);
  })
}