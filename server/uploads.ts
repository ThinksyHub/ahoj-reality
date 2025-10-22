import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";
import { randomUUID } from "crypto";

export const config = {
    api: {
        bodyParser: false, // Next.js must not parse the body
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const form = formidable({ multiples: false });

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error("Form parse error:", err);
                return res.status(500).json({ error: "Error parsing form" });
            }

            let file: File | undefined;

            // files.file can be File or File[]
            const uploaded = (files.file as File | File[]) || undefined;
            if (Array.isArray(uploaded)) {
                file = uploaded[0];
            } else {
                file = uploaded;
            }

            if (!file) {
                return res.status(400).json({ error: "No file uploaded" });
            }

            const ext = path.extname(file.originalFilename || "");
            const uniqueName = `${Date.now()}-${randomUUID()}${ext}`;
            const uploadDir = path.join(process.cwd(), "public", "properties");
            const newPath = path.join(uploadDir, uniqueName);

            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            // Move uploaded file to /public/properties/
            fs.renameSync(file.filepath, newPath);

            return res.status(200).json({
                message: "File uploaded successfully",
                filename: uniqueName,
                url: `/properties/${uniqueName}`,
            });
        });
    } catch (e) {
        console.error("Upload failed:", e);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}