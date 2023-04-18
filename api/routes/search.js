import express from "express";
import { getSearch } from "../controllers/search.js";

const router = express.Router();

// Route to search for users by name or email
router.get("/", getSearch);

export default router;
