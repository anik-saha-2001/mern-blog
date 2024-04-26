import express from "express";
import {
  deleteUser,
  getUsers,
  signOutUser,
  testController,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testController);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOutUser);
router.get("/getusers", verifyToken, getUsers);

export default router;
