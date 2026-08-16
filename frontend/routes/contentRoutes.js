import express from "express";
import { getContent, updateContent } from "../controllers/contentController.js";

const router = express.Router();

router.get("/content", getContent);
router.put("/content", updateContent);

export default router;
