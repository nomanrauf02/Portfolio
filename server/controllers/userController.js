const User = require("../models/users");

// register api
exports.registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      detail,
      organization,
      role,
      project,
      services,
    } = req.body;

    // Check if user already exists
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ error: "Email already exists" });
    // }

    const newUser = new User({
      name,
      email,
      phone,
      address,
      detail,
      organization,
      role,
      project,
      services,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
