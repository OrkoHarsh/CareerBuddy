import mongoose from 'mongoose'

const connectDB = async () => {
  const local_uri = 'mongodb://127.0.0.1:27017/careerbuddy'
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || local_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`DB Connected successfully`)
  } catch (err) {
    console.log(`Error: ${err}`)
    process.exit(1)
  }
}

export default connectDB
