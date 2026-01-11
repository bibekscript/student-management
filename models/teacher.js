
import  mongoose from"mongoose";

const teacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subject: {
      type: String,
      required: true,
    },
    assignedClasses: [
      {
        className: { type: String, required: true },
        section: { type: String, required: true },
      },
    ],
    phone: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
