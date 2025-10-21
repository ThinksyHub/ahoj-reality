import express from "express";
import cors from "cors";
import path from "path";

import propertyRoutes from "./routes/properties.js";
import citiesRoutes from "./routes/cities.js"
import propertyTypesRoutes from "./routes/property_types.js"
import partnersRoutes from "./routes/partners.js"

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/properties", propertyRoutes);
app.use("/api/cities", citiesRoutes);
app.use("/api/property_types", propertyTypesRoutes)
app.use("/api/partners", partnersRoutes)

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../dist");
  app.use(express.static(frontendPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const PORT = 5000;
app.listen(PORT, '0.0.0.0' , () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
