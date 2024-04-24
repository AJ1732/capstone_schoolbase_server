const mongoose = require('mongoose')

// *To check if the id given is valid
const verifyID = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such User' })
  }
}

// *To check if the workout given is exists
const verifyUser = (user, res) => {
  if (!user) {
    return res.status(404).json({ error: 'No such User' })
  }
}

module.exports = {
  verifyID,
  verifyUser
}