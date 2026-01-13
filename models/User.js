import { mongoose } from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student'],
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'role'
  }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
