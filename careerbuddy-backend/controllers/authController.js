import jwt from 'jsonwebtoken'
import User from '../models/User.js'

// Get Token
const getToken = id => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN,
  })
}

// Protect from non-logged user
const protect = async (req, res, next) => {
  let token
  // Get token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(401).json({status: 'fail', msg: 'Authorization denied'})
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.id
    next()
  } catch (err) {
    res.status(401).json({status: 'fail', msg: err.message})
  }
}

// Only for certain roles
const roles = (...roles) => {
  return async (req, res, next) => {
    const user = await User.findById(req.user)
    if (!roles.includes(user.role)) {
      return res.status(403).json({
        status: 'fail',
        msg: 'You are not authorized to access this page',
      })
    }
    next()
  }
}

// Get User from token
const getUserFromToken = async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password')
    res.json({status: 'success', data: {user}})
  } catch (err) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}

// Signup
const signup = async (req, res) => {
  let {name, email, password, role} = req.body

  let user = await User.findOne({email})
  try {
    if (user) {
      return res.status(400).json({status: 'error', msg: 'User already exists'})
    }
    user = await User.create({name, email, password, role})
    const token = getToken(user.id)
    res.status(201).json({status: 'success', data: {user, token}})
  } catch (err) {
    res.status(400).json({status: 'fail', msg: err.message})
  }
}

// Login
const login = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.findOne({email}).select('+password')

    if (!user || !(await user.verifyPassword(password, user.password))) {
      return res.status(400).json({
        status: 'fail',
        msg: 'Incorrect Username or Password',
      })
    }

    const token = getToken(user.id)
    const cookieOptions = {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRESIN * 24 * 60 * 60 * 1000),
      httpOnly: true,
    }

    res.cookie('jwt', token, cookieOptions)
    user.password = undefined

    res.status(200).json({
      status: 'success',
      data: {
        token,
        user,
      },
    })
  } catch (err) {
    res.status(400).json({status: 'fail', msg: err.message})
  }
}

export {protect, getUserFromToken, signup, login, roles}
