const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.body)
  res.json({
    API: 'Blog Backend',
    endpoint: 'Testing Endpoint is working',
  })
})

module.exports = router
