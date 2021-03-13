const User = require('../../models/User')

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    res.status(200).json({
      status: 'Successful',
      data: allUsers,
    })
  } catch (error) {}
}

module.exports = getAllUsers
