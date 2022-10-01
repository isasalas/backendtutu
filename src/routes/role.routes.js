import { Router } from "express";
import {
    createRole,
    getRoles,
    updateRole,
    deleteRole,
    getRole,
} from "../controllers/role.controller.js";

const router = Router();

// Routes
router.get("/", getRoles);
router.post("/", createRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);
router.get("/:id", getRole);

export default router;