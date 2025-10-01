import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import propertyRoutes from "./routes/properties.ts";
import citiesRoutes from "./routes/cities.ts"
import propertyTypesRoutes from "./routes/property_types.ts"

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/properties", propertyRoutes);
app.use("/api/cities", citiesRoutes);
app.use("/api/property_types", propertyTypesRoutes)

// Serve React build in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../dist");
  app.use(express.static(frontendPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
