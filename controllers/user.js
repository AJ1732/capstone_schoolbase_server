const User = require('../models/user')
const { verifyID, verifyUser } = require('../utils/verify')

// GET all Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ message: error.message }) 
  }
}

const getUserByQuery = async (req, res) => {
  try {
    const user = await User.find({ email: 'test@schoolbase.edu' })
    res.status(200).json(user)
  } catch(error) {
    return res.status(500).json({ message: error.message }) 
  }
}

// POST a single user
const createUser = async (req, res) => {
  const { email, username, firstname, surname, school, address, password } = req.body

  try {
    const user = await User.create({ email, username, firstname, surname, school, address, password })
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET a single user
const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    verifyID(id, res)
    
    const user = await User.findById(id)
    verifyUser(user, res);
  
    res.status(200).json(user)
  } catch(error) {
    return res.status(500).json({ message: error.message }) 
  }
}

// DELETE a single user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    verifyID(id, res)
    
    const user = await User.findOneAndDelete({ _id: id })
    verifyUser(user, res);
  
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message }) 
  }
}

// PATCH a single user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    verifyID(id, res)
    
    const updatedData = req.body;
    const options = { new: true };

    const user = await User.findOneAndUpdate({_id: id}, {...req.body})
    // const user = await User.findByIdAndUpdate(id, updatedData, options)
    verifyUser(user, res)

    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}


module.exports = {
  getAllUsers, 
  createUser,
  getSingleUser,
  getUserByQuery,
  updateUser,
  deleteUser
}