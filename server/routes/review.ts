import express from "express";
import {
    getAllReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
} from "../controllers/review.js";

const router = express.Router();

router.get("/", getAllReviews);          // GET /api/reviews
router.get("/:id", getReview);           // GET /api/reviews/:id
router.post("/", createReview);          // POST /api/reviews
router.put("/:id", updateReview);        // PUT /api/reviews/:id
router.delete("/:id", deleteReview);     // DELETE /api/reviews/:id

export default router;
