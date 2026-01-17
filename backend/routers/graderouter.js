import express from "express";
const router = express.Router();

import { 
  createGrade, 
  getGrades, 
  updateGrade, 
  deleteGrade 
} from '../controller/gradecontroller.js';

import protect  from '../middleware/authMiddleware.js';
import  authorize  from '../middleware/roleMiddleware.js';

router.post('/', protect, authorize('teacher', 'admin'), createGrade);
router.get('/', protect, authorize('teacher', 'admin'), getGrades);
router.put('/:id', protect, authorize('teacher', 'admin'), updateGrade);
router.delete('/:id', protect, authorize('admin'), deleteGrade);

export default router;
