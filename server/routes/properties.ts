import express from "express";
import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getProperty,
    updateProperty
} from "../controllers/properties.js";

const router = express.Router();

router.get("/", getAllProperties);

router.get("/:id", getProperty);

router.post("/", createProperty);

router.put("/:id", updateProperty);

router.delete("/:id", deleteProperty);

export default router;
