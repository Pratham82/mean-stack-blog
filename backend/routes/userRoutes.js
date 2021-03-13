const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const userSignIn = require('../controllers/userController/userSingIn')
const userLogIn = require('../controllers/userController/userLogin')
const getAllUsers = require('../controllers/userController/getAllUsers')

router.post('/signUp', userSignIn)
router.post('/login', userLogIn)
router.get('/', getAllUsers)

module.exports = router
