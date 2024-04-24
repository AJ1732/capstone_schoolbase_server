const express = require("express");
const User = require('../models/user')
const router = express.Router();
const { getAllUsers, createUser, getSingleUser, getUserByQuery } = require('../controllers/user')

// GET ALL USERS
router.get('/', getAllUsers);
router.get('/email', getUserByQuery);

// POST NEW USER
router.post('/', createUser);

// GET SINGLE USER
router.get('/:id', (req, res) => {
  res.json({ mssg: "GET single user" })
});

// DELETE SINGLE USER
router.delete('/:id', (req, res) => {
  res.json({ mssg: "DELETE single user" })
});

// UPDATE SINGE USER
router.patch('/:id', (req, res) => {
  res.json({ mssg: "UPDATE single user" })
});

module.exports = router;