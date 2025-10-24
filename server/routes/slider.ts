import express from "express";
import { getAllSliderImages, addSliderImage, deleteSliderImage } from "../controllers/slider.js";

const router = express.Router();

router.get("/", getAllSliderImages);
router.post("/", addSliderImage);
router.delete("/:filename", deleteSliderImage);

export default router;
