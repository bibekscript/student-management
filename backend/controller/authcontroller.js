
import User from "../models/User.js";
import Student from "../models/students.js";
import Teacher from "../models/Teacher.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";


const register = async (req, res) => {
  try {
    const { email, password, role, profileData } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      isVerified: false
    });

    let profile;
    if (role === 'student') {
      profile = await Student.create({
        userId: user._id,
        ...profileData
      });
    } else if (role === 'teacher') {
      profile = await Teacher.create({
        userId: user._id,
        ...profileData
      });
    }

    user.profileId = profile._id;
    await user.save();

    res.status(201).send({
      message: 'Registration successful. Please wait for admin verification.',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    if (!user.isVerified) {
      return res.status(403).send({ message: 'Account pending verification. Please contact admin.' });
    }

    const token = generateToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    let profile;
    if (req.user.role === 'student') {
      profile = await Student.findOne({ userId: req.user._id });
    } else if (req.user.role === 'teacher') {
      profile = await Teacher.findOne({ userId: req.user._id });
    }

    res.json({
      user: {
        id: req.user._id,
        email: req.user.email,
        role: req.user.role,
        isVerified: req.user.isVerified
      },
      profile
    });
  }
   catch (error) {
    res.status(500).json({ message: error.message });
  };
};

  export{register,login,getMe}