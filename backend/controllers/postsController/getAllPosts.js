const Post = require('../../models/Post')

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
    console.log(allPosts)
    res.json({
      message: 'Get All Posts working',
      posts: allPosts,
    })
  } catch (e) {
    /* handle error */
  }
}

module.exports = getAllPosts
