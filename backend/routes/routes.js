//import express
import express from "express";

//import functions from controller
import {
  showQandA,
  createQandA
} from "../controllers/survey.js";

//init express router
const router = express.Router();

//get answer
router.get("/answer", showQandA);

// Create New question and answer
router.post("/answer", createQandA);

//export default router
export default router;
