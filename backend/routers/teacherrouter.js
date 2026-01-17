import express from "express";
import {
  getTeachers,
  getTeacher,
  updateTeacher,
  getAssignedStudents,
} from "../controller/teachercontroller.js";

import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", protect, getTeachers);
router.get("/:id", protect, getTeacher);
router.put("/:id", protect, authorize("admin", "teacher"), updateTeacher);
router.get(
  "/:id/students",
  protect,
  authorize("teacher", "admin"),
  getAssignedStudents
);

export default router;
