import express from 'express'
import { getPartners } from '../controllers/partners.js'

const router = express.Router();

router.get("/", getPartners);

export default router;