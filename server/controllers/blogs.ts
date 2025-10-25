import type { Request, Response } from "express";
import { db } from "../db.js"; // this is the pool version from mysql2/promise
import type { RowDataPacket, ResultSetHeader } from "mysql2";

// 🟢 Get all blogs
export const getAllBlogs = async (_req: Request, res: Response) => {
    try {
        const [rows] = await db.query<RowDataPacket[]>(
            "SELECT * FROM blogs ORDER BY id DESC"
        );
        res.json(rows);
    } catch (err) {
        console.error("❌ Error fetching blogs:");
        res.status(500).json({ });
    }
};

// 🟢 Get single blog
export const getBlog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query<RowDataPacket[]>(
            "SELECT * FROM blogs WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error("❌ Error fetching blog:");
        res.status(500).json({ });
    }
};

// 🟢 Create new blog
export const createBlog = async (req: Request, res: Response) => {
    try {
        const { title, content, main_image } = req.body;
        const slug = req.body.slug || title?.toLowerCase().replace(/\s+/g, "-") || "";

        const [result] = await db.query<ResultSetHeader>(
            "INSERT INTO blogs (title, slug, content, main_image) VALUES (?, ?, ?, ?)",
            [title, slug, content, main_image]
        );

        res.status(201).json({ message: "Blog created", id: result.insertId });
    } catch (err) {
        console.error("❌ Error creating blog:");
        res.status(500).json({ });
    }
};

// 🟢 Update blog
export const updateBlog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content, main_image } = req.body;

        const [result] = await db.query<ResultSetHeader>(
            "UPDATE blogs SET title = ?, content = ?, main_image = ? WHERE id = ?",
            [title, content, main_image, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.json({ message: "Blog updated" });
    } catch (err) {
        console.error("❌ Error updating blog:");
        res.status(500).json({});
    }
};

// 🟢 Delete blog
export const deleteBlog = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const [result] = await db.query<ResultSetHeader>(
            "DELETE FROM blogs WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.json({ message: "Blog deleted" });
    } catch (err) {
        console.error("❌ Error deleting blog:");
        res.status(500).json({});
    }
};
