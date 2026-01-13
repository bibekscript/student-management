import Teacher from '../models/Teacher.js';
import Student from '../models/students.js';


const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find()
      .populate('userId', 'email isVerified');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
      .populate('userId', 'email isVerified');
    
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    if (req.user.role === 'teacher' && teacher.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAssignedStudents = async (req, res) => {
  try {
    const students = await Student.find({ assignedTeacher: req.params.id })
      .populate('userId', 'email isVerified');
    
    res.json(students);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export{ getTeachers, getTeacher, updateTeacher, getAssignedStudents };