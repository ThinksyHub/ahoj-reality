import { Router } from "express";
import { getPropertyTypes } from "../controllers/property_types.ts"

const router = Router();

router.get('/', getPropertyTypes);

export default router;