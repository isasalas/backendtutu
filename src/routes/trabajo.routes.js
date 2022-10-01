import { Router } from "express";
import {
    createTrabajo,
    getTrabajos,
    updateTrabajo,
    deleteTrabajo,
    getTrabajo,
} from "../controllers/trabajo.controller.js";

const router = Router();

// Routes
router.get("/", getTrabajos);
router.post("/", createTrabajo);
router.put("/:id", updateTrabajo);
router.delete("/:id", deleteTrabajo);
router.get("/:id", getTrabajo);

export default router;