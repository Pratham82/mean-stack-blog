const express = require('express')
const router = new express.Router()
const createPost = require('../controllers/postsController/createPost')
const getAllPosts = require('../controllers/postsController/getAllPosts')

router.get('/', getAllPosts)
router.post('/', createPost)

module.exports = router
