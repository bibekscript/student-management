import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";
import {
  getUnverifiedUsers,
  verifyUser,
  createFee,
  getAllFees,
  updateFee,
} from "../controller/admincontroller.js";

const router = express.Router();
router.use(protect);
router.use(authorize("admin"));

router.put("/verify/:userId", verifyUser);
router.post("/fees", createFee);
router.get("/fees", getAllFees);
router.put("/fees/:feeId", updateFee);

export default router;
