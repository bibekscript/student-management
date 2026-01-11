import mongoose from "mongoose";
import { z } from "zod";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export const AddStudentSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  grade: z.string().min(1),
  section: z.string().min(1),
  age: z.number().int().min(1),
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
