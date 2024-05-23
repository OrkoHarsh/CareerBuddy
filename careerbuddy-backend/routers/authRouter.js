import express from 'express'
import {signup, login, protect, getUserFromToken} from '../controllers/authController.js'

const Router = express.Router()

Router.get('/', protect, getUserFromToken)
Router.post('/signup', signup)
Router.post('/login', login)

export default Router
