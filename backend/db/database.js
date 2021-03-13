const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
      () => console.log('MongoDB connected Successfully ✅')
    )
  } catch (e) {
    /* handle error */
    console.error(e.message)
    process.exit(1)
  }
}

module.exports = connectDB
