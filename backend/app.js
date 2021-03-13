const express = require('express')
const app = express()
const connectDB = require('./db/database')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3000

//Routes
const testRouter = require('./routes/apiTestRoutes')
const postRouter = require('./routes/postRoutes')
const userRouter = require('./routes/userRoutes')

// Adding middlewares
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(cors())

// Connect to Mongo Database
connectDB()

// Routing
app.use('/api', testRouter)
app.use('/posts', postRouter)
app.use('/users', userRouter)

app.listen(3000, 'localhost', () =>
  console.log(`Server is running on http://localhost:${PORT}/api`)
)
