import Student from "../models/students.js";
import Grade from "../models/grade.js";
const getStudent=async(req,res)=>{
    try {
        const student=await Student.find();
         res.status(200).send(student);
        }
    catch (error) {
        res.status(500).send({error:error.message});
    };
};
const getStudentId=async(req,res)=>{
    try {
        const student=await Student.findById(req.params.Id);
        if(!student){
            return res.status(404).send({message:"Student not found"});
        }
        res.status(200).send({student});
    } catch (error) {
        res.status(500).send({error:error.message});
    };
};


const postStudent = async (req, res) => {
  try {
    const { name, email, className, section, age } = req.body;
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).send({ message: "Student already exists" });
    }
    const newStudent = new Student({ name, email, className, section, age });
    await newStudent.save();

    res.status(201).send({
      message: "Student added successfully",
      student: newStudent,
    });
  } catch (error) {
    res.status(400).send({ message: "Invalid data", error: error.message });
  }
};

const updateStudent=async(req,res) =>{
    try {
        const StudentId =req.params.Id;
        const updatebody=req.body;
        const updaetdateStudent=await Student.findByIdAndUpdate(
            StudentId,
            updatebody,
            {new:true}
        );
    if(!updaetdateStudent){
       return res.status(400).send({message:"Student not updated"});
    };
    res.send(updaetdateStudent);
    } catch (error) {
        res.status(400).send({err:error.messaeg});
    };

};

const deleteStudent = async (req, res) => {
  const { Id } = req.params;
  try {
    const deletedStudent = await Student.findByIdAndDelete(Id);

    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({
      message: "Student deleted successfully!",
      student: deletedStudent,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudentGrade=async(req,res)=>{
  try {
    const grades=await Grade.find({Student:req.params.Id});
    if(!grades){
      return res.status(404).send({error:"Grade not added"});
    }
    res.send(grades);
  } catch (error) {
    res.status(404).send({error:error.message});
  }
}


export{getStudent,getStudentId,postStudent,updateStudent,deleteStudent,getStudentGrade };