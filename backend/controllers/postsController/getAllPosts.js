const Post = require('../../models/Post')

const getAllPosts = async (_, res) => {
  try {
    const allPosts = await Post.find()
    console.log(allPosts)
    res.json({
      message: 'All Posts',
      posts: allPosts,
    })
  } catch (e) {
    /* handle error */
  }
}

module.exports = getAllPosts
