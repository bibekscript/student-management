import express from'express';
import { getStudent, getStudentId, postStudent,updateStudent,deleteStudent,getStudentGrade } 
from '../controller/studentcontroller.js';
import {AddStudentSchema }from"../models/students.js";
import {studentRecordSchema} from"../models/grade.js";
import validationHandler from '../middleware/validationhandller.js';

const router = express.Router();

router.get("/", getStudent);
router.get("/:id", getStudentId);
router.post("/", validationHandler(AddStudentSchema), postStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);


router.get("/:id/grades", getStudentGrade);

export default router;
