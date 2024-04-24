const User = require('../models/user')
const { verifyID, verifyUser } = require('../utils/verify')

// GET all Users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 })
  res.status(200).json(users)
}

const getUserByQuery = async (req, res) => {
  const user = await User.find({ email: 'test@schoolbase.edu' })
  res.status(200).json(user)
}

// POST a single user
const createUser = async (req, res) => {
  const { email, username, name, surname, school, address, password } = req.body

  try {
    const user = await User.create({ email, username, name, surname, school, address, password })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// GET a single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  verifyID(id)
  
  const user = await User.findById(id)
  verifyUser(user);
}

// DELETE a single user

module.exports = {
  getAllUsers, 
  createUser,
  getSingleUser,
  getUserByQuery,
}