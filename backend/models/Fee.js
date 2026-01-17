import mongoose from"mongoose";

const FeeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  paidDate: Date,
  status: {
    type: String,
    enum: ['pending', 'paid', 'overdue'],
    default: 'pending'
  },
  feeType: {
    type: String,
    enum: ['tuition', 'exam', 'library', 'transport', 'other'],
    required: true
  },
  academicYear: String,
  term: String,
  remarks: String
}, { timestamps: true });

const Fee = mongoose.model("Fee", FeeSchema);
export default Fee;