import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import UserRoles from '../utils/enums.js'

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: [true, 'E-mail already exists'],
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: 8,
    select: false,
  },
  role: {
    type: String,
    enum: [UserRoles.STUDENT, UserRoles.MENTOR],
    required: true,
  },
  skills: {
    type: [String],
    default: [],
  },
  bio: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  meeting_link: {
    type: String,
    default: '',
  },
  profile_picture: {
    type: String,
    default: '',
  },
  reviews: {
    type: [
      {
        rating: Number,
        review: String,
        reviewer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    default: [],
  },
})

// Encrypting password before saving
schema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// Verify Password
schema.methods.verifyPassword = async function (candidatePassword, password) {
  return await bcrypt.compare(candidatePassword, password)
}

const model = mongoose.model('User', schema)
export default model
