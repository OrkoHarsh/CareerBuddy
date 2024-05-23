import express from 'express'
import {protect, roles} from '../controllers/authController.js'
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getAllStudents,
  getAllMentors,
  postReview,
  deleteReview,
} from '../controllers/userController.js'

const Router = express.Router()

Router.get('/', getAllUsers)
Router.get('/students', getAllStudents)
Router.get('/mentors', getAllMentors)

Router.route('/:id').get(getUser).patch(updateUser).delete(protect, deleteUser)
Router.route('/:id/review').patch(protect, postReview)
Router.route('/review/:id').delete(protect, deleteReview)

export default Router
