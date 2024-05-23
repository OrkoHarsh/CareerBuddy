import User from '../models/User.js'
import UserRoles from '../utils/enums.js'

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.status(200).json({status: 'success', data: {users, count: users.length}})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}

const getUser = async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id).select('-password')
    if (!user) {
      return res.status(404).json({status: 'fail', msg: 'User not found'})
    }
    res.json({status: 'success', data: {user}})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}

const getAllStudents = async (req, res) => {
  try {
    const users = await User.find({role: UserRoles.STUDENT}).select('-password')
    res.status(200).json({status: 'success', data: {users, count: users.length}})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}
const getAllMentors = async (req, res) => {
  try {
    const users = await User.find({role: UserRoles.MENTOR}).select('-password')
    res.status(200).json({status: 'success', data: {users, count: users.length}})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}

const updateUser = async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findByIdAndUpdate(id, req.body, {new: true}).select('-password')
    res.status(200).json({status: 'success', data: {user}})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}

const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.status(200).json({status: 'success', data: null})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}
const postReview = async (req, res) => {
  try {
    const {id} = req.params
    const {rating, review} = req.body
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({status: 'fail', msg: 'User not found'})
    }
    const reviewObj = {
      rating,
      review,
      reviewer: req.user,
    }
    user.reviews.push(reviewObj)
    await user.save()
    res.status(200).json({status: 'success', data: {user}})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}

const deleteReview = async (req, res) => {
  try {
    const userId = req.user
    const {id} = req.params
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({status: 'fail', msg: 'User not found'})
    }
    const reviews = user.reviews.filter(review => review._id.toString() !== id)
    user.reviews = reviews

    await user.save()
    res.status(200).json({status: 'success', data: {user}})
  } catch (error) {
    res.status(500).json({status: 'fail', msg: 'Server Error'})
  }
}

export {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getAllStudents,
  getAllMentors,
  postReview,
  deleteReview,
}
