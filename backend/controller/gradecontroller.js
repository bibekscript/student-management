import Grade from "../models/grade.js";
import Student from "../models/students.js";
import Teacher from "../models/Teacher.js";

const createGrade=async(req,res)=>{
    try {
        const {StudentId,subject, examType,score,maxScore,remarks}=req.body;

    const student =await Student.findById(StudentId);
    if (!student){
        return res.status(404).send({message:"Student not found"})
    }
   
     let teacherId;
    if (req.user.role === 'teacher') {
      const teacher = await Teacher.findOne({ userId: req.user._id });
      teacherId = teacher._id;
    } else {
      teacherId = req.body.teacherId;
    }

    const percentage = (score / maxScore) * 100;
    let gradeValue;
    if (percentage >= 90) gradeValue = 'A+';
    else if (percentage >= 80) gradeValue = 'A';
    else if (percentage >= 70) gradeValue = 'B';
    else if (percentage >= 60) gradeValue = 'C';
    else if (percentage >= 50) gradeValue = 'D';
    else gradeValue = 'F';

    const grade = await Grade.create({
      StudentId,
      teacherId,
      subject,
      examType,
      score,
      maxScore,
      grade: gradeValue,
      remarks
    });

    res.status(201).json(grade);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getGrades = async (req, res) => {
  try {
    const grades = await Grade.find()
      .populate('studentId', 'firstName lastName rollNumber')
      .populate('teacherId', 'firstName lastName subject');
    
    res.json(grades);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateGrade = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    
    if (!grade) {
      return res.status(404).send({ message: 'Grade not found' });
    }

    if (req.body.score && req.body.maxScore) {
      const percentage = (req.body.score / req.body.maxScore) * 100;
      if (percentage >= 90) req.body.grade = 'A+';
      else if (percentage >= 80) req.body.grade = 'A';
      else if (percentage >= 70) req.body.grade = 'B';
      else if (percentage >= 60) req.body.grade = 'C';
      else if (percentage >= 50) req.body.grade = 'D';
      else req.body.grade = 'F';
    }

    const updatedGrade = await Grade.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedGrade);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteGrade = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    
    if (!grade) {
      return res.status(404).send({ message: 'Grade not found' });
    }

    await grade.deleteOne();
    res.json({ message: 'Grade deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export{ createGrade, getGrades, updateGrade, deleteGrade };


