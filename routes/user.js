const express = require("express");
const User = require('../models/user')
const router = express.Router();
const { getAllUsers, createUser, getSingleUser, getUserByQuery, deleteUser, updateUser } = require('../controllers/user')

// GET ALL USERS
router.get('/', getAllUsers);
router.get('/email', getUserByQuery);

// POST NEW USER
router.post('/', createUser);

// GET SINGLE USER
router.get('/:id', getSingleUser);

// DELETE SINGLE USER
router.delete('/:id', deleteUser);

// UPDATE SINGE USER
router.patch('/:id', updateUser);

module.exports = router;