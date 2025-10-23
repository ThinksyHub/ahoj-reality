import type { Request, Response } from "express";
import { db } from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

export const getAllProperties = (_req: Request, res: Response) => {
    db.query("SELECT * FROM properties ORDER BY id DESC", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        // Parse JSON column before returning
        const parsed = (results as RowDataPacket[]).map((row) => ({
            ...row,
            property_images: row.property_images || [],
        }));

        res.json(parsed);
    });
};

export const getProperty = (req: Request, res: Response) => {
    const { id } = req.params;

    db.query<RowDataPacket[]>(
        "SELECT * FROM properties WHERE id = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!results.length)
                return res.status(404).json({ message: "Property not found" });

            const property = results[0];

            // ✅ Safely handle property_images (whether string, object, or empty)
            let images: unknown[] = [];
            if (property.property_images) {
                if (typeof property.property_images === "string") {
                    try {
                        images = JSON.parse(property.property_images);
                    } catch {
                        images = [];
                    }
                } else if (Array.isArray(property.property_images)) {
                    images = property.property_images;
                }
            }

            property.property_images = images;

            res.json(property);
        }
    );
};

export const createProperty = (req: Request, res: Response) => {
    const property = req.body;

    const sql = `
    INSERT INTO properties (
      property_name, property_slug, property_purpose, property_type, description,
      sale_price, rent_price, address, city_id, area, bedrooms, bathrooms,
      map_latitude, map_longitude, property_features, featured_property,
      featured_image, property_images, status, user_id, youtube_url
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CAST(? AS JSON), ?, ?, ?)
  `;

    const slug =
        property.property_slug ||
        (property.property_name
            ? property.property_name.toLowerCase().replace(/\s+/g, "-")
            : "");

    const values = [
        property.property_name || "",
        slug,
        property.property_purpose || "Sale",
        property.property_type || "",
        property.description || "",
        property.sale_price || "0",
        property.rent_price || "0",
        property.address || "",
        property.city_id || 0,
        property.area || 0,
        property.bedrooms || 0,
        property.bathrooms || 0,
        property.map_latitude || "0",
        property.map_longitude || "0",
        property.property_features || "",
        property.featured_property || 0,
        property.featured_image || "",
        JSON.stringify(property.property_images || []),
        property.status || 1,
        property.user_id || 1,
        property.youtube_url || ""
    ];

    db.query<ResultSetHeader>(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: "Property created successfully",
            id: result.insertId,
        });
    });
};

export const updateProperty = (req: Request, res: Response) => {
    const { id } = req.params;
    const property = req.body;

    const sql = `
    UPDATE properties SET
      property_name = ?, property_slug = ?, property_purpose = ?, property_type = ?, description = ?,
      sale_price = ?, rent_price = ?, address = ?, city_id = ?, area = ?, bedrooms = ?, bathrooms = ?,
      map_latitude = ?, map_longitude = ?, property_features = ?, featured_property = ?,
      featured_image = ?, property_images = CAST(? AS JSON), status = ?, user_id = ?, youtube_url = ?
    WHERE id = ?
  `;

    const values = [
        property.property_name,
        property.property_slug,
        property.property_purpose,
        property.property_type,
        property.description,
        property.sale_price,
        property.rent_price,
        property.address,
        property.city_id,
        property.area,
        property.bedrooms,
        property.bathrooms,
        property.map_latitude,
        property.map_longitude,
        property.property_features,
        property.featured_property,
        property.featured_image,
        JSON.stringify(property.property_images || []),
        property.status,
        property.user_id,
        property.youtube_url,
        id,
    ];

    db.query<ResultSetHeader>(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Property not found" });

        res.json({ message: "Property updated successfully" });
    });
};

export const deleteProperty = (req: Request, res: Response) => {
    const { id } = req.params;

    db.query<ResultSetHeader>(
        "DELETE FROM properties WHERE id = ?",
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            if (result.affectedRows === 0)
                return res.status(404).json({ message: "Property not found" });

            res.json({ message: "Property deleted successfully" });
        }
    );
};