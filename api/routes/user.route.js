import express from "express";
import { testController, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testController);
router.put("/update/:userId", verifyToken, updateUser);

export default router;
