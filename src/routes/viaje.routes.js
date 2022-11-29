import { Router } from "express";
import {
    createViaje,
    getViajes,
    updateViaje,
    deleteViaje,
    getViaje
} from "../controllers/Viaje.controller.js";

const router = Router();

// Routes
router.get("/", getViajes);
router.post("/", createViaje);
router.put("/:id", updateViaje);
router.delete("/:id", deleteViaje);
router.get("/:id", getViaje)
export default router;