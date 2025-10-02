import express from 'express'
import { getPartners } from '../controllers/partners.ts'

const router = express.Router();

router.get("/", getPartners);

export default router;