const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSignIn = async (req, res) => {
  const { email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({
    email,
    password: hashedPassword,
  })

  res.status(201).json({
    message: 'Successfully Created a User!!',
  })
}

module.exports = userSignIn
