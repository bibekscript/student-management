
import User from("../models/User.js");
import Fee from("../models/Fee.js");
import Student from("../models/students.js");


const getUnverifiedUsers = async (req, res) => {
  try {
    const users = await User.find({ verified: false }).select("-password");
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching unverified users", error: error.message });
  }
};


const verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.verified = true;
    await user.save();

    res.send({ message: "User verified successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error verifying user", error: error.message });
  }
};


const createFee = async (req, res) => {
  try {
    const { studentId, amount, dueDate } = req.body;

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).send({ message: "Student not found" });

    const fee = await Fee.create({
      student: studentId,
      amount,
      dueDate,
      status: "Pending",
    });

    res.status(201).send({ message: "Fee created successfully", fee });
  } catch (error) {
    res.status(500).send({ message: "Error creating fee", error: error.message });
  }
};

const getAllFees = async (req, res) => {
  try {
    const fees = await Fee.find().populate("student", "rollNo className section");
    res.send(fees);
  } catch (error) {
    res.status(500).send({ message: "Error fetching fees", error: error.message });
  }
};

const updateFee = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id);
    if (!fee) return res.status(404).send({ message: "Fee not found" });

    const updated = await Fee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({ message: "Fee updated successfully", fee: updated });
  } catch (error) {
    res.status(500).send({ message: "Error updating fee", error: error.message });
  }
};

module.exports = {
  getUnverifiedUsers,
  verifyUser,
  createFee,
  getAllFees,
  updateFee,
};
