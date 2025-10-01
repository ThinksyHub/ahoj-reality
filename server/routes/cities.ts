import express from 'express'
import { getCities } from '../controllers/cities.ts';

const router = express.Router();

router.get("/", getCities);

export default router;