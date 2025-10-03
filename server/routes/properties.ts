import express from "express";
import { getAllProperties, getProperty } from "../controllers/properties.ts";

const router = express.Router();

router.get("/", getAllProperties);

router.get("/:id", getProperty);

export default router;
