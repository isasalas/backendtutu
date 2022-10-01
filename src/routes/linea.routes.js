import { Router } from "express";
import {
    createLinea,
    getLineas,
    updateLinea,
    deleteLinea,
    getLinea,
} from "../controllers/linea.controller.js";

const router = Router();

// Routes
router.get("/", getLineas);
router.post("/", createLinea);
router.put("/:id", updateLinea);
router.delete("/:id", deleteLinea);
router.get("/:id", getLinea);

export default router;