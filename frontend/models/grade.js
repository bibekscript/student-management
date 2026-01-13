
import mongoose from"mongoose";
import {z} from 'zod';
const gradeSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    marks: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    grade: {
      type: String,
      enum: ["A+", "A", "B+", "B", "C", "D", "F"],
      required: true,
    },
    remarks: {
      type: String,
      default: "",
      trim: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
  },
  { timestamps: true }
);

export const studentRecordSchema = z.object({

  subject: z.string().trim().min(1, "Subject is required"),
  marks: z.number().min(0).max(100),
  grade: z.enum(["A+", "A", "B+", "B", "C", "D", "F"]),
  remarks: z.string().trim().optional().default(""), 
});


const Grade = mongoose.model("Grade", gradeSchema);

export default Grade;
