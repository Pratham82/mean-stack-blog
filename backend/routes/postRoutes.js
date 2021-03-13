const express = require('express')
const router = new express.Router()
const createPost = require('../controllers/postsController/createPost')
const getAllPosts = require('../controllers/postsController/getAllPosts')
const getOnePost = require('../controllers/postsController/getOnePost')

router.get('/', getAllPosts)
router.get('/:id', getOnePost)
router.post('/', createPost)

module.exports = router
