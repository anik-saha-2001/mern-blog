import express from "express";
import {
  google,
  signInUser,
  signUpUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/signin", signInUser);
router.post("/google", google);

export default router;
