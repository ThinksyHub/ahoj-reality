import type { Request, Response } from "express";
import { db } from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

// Get all blogs
export const getAllBlogs = (_req: Request, res: Response) => {
    db.query("SELECT * FROM blogs ORDER BY id DESC", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Get single blog
export const getBlog = (req: Request, res: Response) => {
    const { id } = req.params;
    db.query<RowDataPacket[]>(
        "SELECT * FROM blogs WHERE id = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!results.length) return res.status(404).json({ message: "Blog not found" });
            res.json(results[0]);
        }
    );
};

// Create new blog
export const createBlog = (req: Request, res: Response) => {
    const { title, content, main_image } = req.body;
    const slug = req.body.slug || title?.toLowerCase().replace(/\s+/g, "-") || "";

    db.query<ResultSetHeader>(
        `INSERT INTO blogs (title, slug, content, main_image) VALUES (?, ?, ?, ?)`,
        [title, slug, content, main_image],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Blog created", id: result.insertId });
        }
    );
};


// Update blog
export const updateBlog = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content, main_image } = req.body;

    db.query<ResultSetHeader>(
        "UPDATE blogs SET title = ?, content = ?, main_image = ? WHERE id = ?",
        [title, content, main_image, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: "Blog not found" });
            res.json({ message: "Blog updated" });
        }
    );
};

// Delete blog
export const deleteBlog = (req: Request, res: Response) => {
    const { id } = req.params;
    db.query<ResultSetHeader>(
        "DELETE FROM blogs WHERE id = ?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows === 0) return res.status(404).json({ message: "Blog not found" });
            res.json({ message: "Blog deleted" });
        }
    );
};
