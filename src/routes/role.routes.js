import { Router } from "express";
import {
    createRole,
    getRoles,
    updateRole,
    deleteRole,
    getRole,
    getRoleUsers,
} from "../controllers/role.controller.js";

const router = Router();

// Routes

router.get("/", getRoles);
router.post("/", createRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);
router.get("/:id", getRole);
router.get("/user/:id", getRoleUsers);


export default router;