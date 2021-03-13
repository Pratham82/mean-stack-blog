const Post = require('../../models/Post')

const getOnePost = async (req, res) => {
  if (req.params.id) {
    const { id: postID } = req.params
    console.log(postID)

    try {
      const allPosts = await Post.findById({ _id: postID })
      res.json({
        message: 'Post Found',
        posts: allPosts,
      })
    } catch (e) {
      /* handle error */
      res.status(400).send({
        status: 'Unsuccessful',
        message: e.message,
      })
    }
  }
}

module.exports = getOnePost
