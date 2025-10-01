import express from "express";
import { getAllProperties } from "../controllers/properties.ts";

const router = express.Router();

router.get("/", getAllProperties);

export default router;
