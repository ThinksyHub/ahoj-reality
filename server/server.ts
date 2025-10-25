import express from "express";
import cors from "cors";
import path from "path";

import propertyRoutes from "./routes/properties.js";
import citiesRoutes from "./routes/cities.js"
import propertyTypesRoutes from "./routes/property_types.js"
import partnersRoutes from "./routes/partners.js"
import uploadRoutes from "./routes/uploads.js";
import sliderRoutes from "./routes/slider.js";
import sliderUploadRoutes from "./routes/sliderUpload.js";
import blogRoutes from "./routes/blogs.js";
import blogUploadsRoutes from "./routes/blogUpload.js";
import reviewRoutes from "./routes/review.js";

import chokidar from "chokidar";
import fs from "fs-extra";
import path from "path";


const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/properties", propertyRoutes);
app.use("/api/cities", citiesRoutes);
app.use("/api/property_types", propertyTypesRoutes)
app.use("/api/partners", partnersRoutes)
app.use("/api/upload", uploadRoutes);
app.use("/api/slider", sliderRoutes);
app.use("/api/upload/slider", sliderUploadRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/upload/blog", blogUploadsRoutes);
app.use("/api/review", reviewRoutes);

// Serve uploads and public assets first
app.use("/public", express.static(path.join(process.cwd(), "public")));

// Then serve frontend in production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(process.cwd(), "dist");
  app.use(express.static(frontendPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}


const PORT = 5000;
app.listen(PORT, '0.0.0.0' , () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

const publicFolder = path.join(process.cwd(), "public");
const distFolder = path.join(process.cwd(), "dist");

// Watch for changes in public folder
chokidar.watch(publicFolder, { ignoreInitial: true }).on("all", (event, filePath) => {
  const relativePath = path.relative(publicFolder, filePath);
  const destPath = path.join(distFolder, relativePath);

  if (event === "add" || event === "change") {
    fs.copy(filePath, destPath)
        .then(() => console.log(`[COPY] ${relativePath} → dist`))
        .catch(err => console.error(`[ERROR] Failed to copy ${relativePath}:`, err));
  }
  if (event === "unlink") {
    fs.remove(destPath)
        .then(() => console.log(`[REMOVE] ${relativePath} from dist`))
        .catch(err => console.error(`[ERROR] Failed to remove ${relativePath}:`, err));
  }
});

