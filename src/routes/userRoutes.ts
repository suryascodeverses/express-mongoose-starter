import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getCurrentUser,
} from "../controllers/userController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.get("/me", authenticate, getCurrentUser);
router.get("/", authenticate, getAllUsers);
router.get("/:id", authenticate, getUserById);
router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, deleteUser);

export default router;
