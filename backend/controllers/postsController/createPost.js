const Post = require('../../models/Post')

const createPost = async (req, res) => {
  if (req.body) {
    const { title, description, content } = req.body
    console.log(title, description, content)
    const post = new Post({
      title,
      description,
      content,
    })
    try {
      const newPost = await post.save()
      res.status(201).json({
        status: 'Successful',
        message: 'New Post created',
        data: {
          newPost,
        },
      })
    } catch (e) {
      /* handle error */
      res.json({
        status: 'Unsuccessful',
        message: e.message,
      })
    }
  } else {
    res.json({
      message: 'Unsuccessful',
    })
  }
}

module.exports = createPost
