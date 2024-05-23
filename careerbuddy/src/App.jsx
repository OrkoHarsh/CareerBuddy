import AuthState from 'context/auth/AuthState'
import {Routes, BrowserRouter as Router, Route, useLocation} from 'react-router-dom'
import setAuthToken from 'utils/setAuthToken'
import HomePage from './pages/HomePage'
import CareerNews from './pages/CareerNews'
import ContactUs from './pages/ContactUs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Mentors from 'components/Mentors'
import CareerCard from 'components/CareerCard'
import CareerDetails from 'components/CareerDetails'
import PublicRoute from 'components/HOC/PublicRoute'
import Page404 from 'pages/Page404'
import Dashboard from 'pages/Dashboard/Dashboard'
import Profile from 'pages/Dashboard/Profile'
import EditProfile from 'pages/Dashboard/EditProfile'
import Settings from 'pages/Dashboard/Settings'
import MlForm from 'pages/MlForm'
import Students from 'components/Students'
import MyChatbot from 'components/MyChatbot'
import NewForm from 'pages/NewForm'
import Swayamcourses from 'components/Swayamcourses'
import Review from 'pages/Dashboard/Review'
import Chatbot from 'react-chatbot-kit'
import Feedbacks from 'pages/Dashboard/Feedbacks'
import WebsiteData from 'components/WebsiteData'
import {useEffect, useLayoutEffect} from 'react'
import ScrollTop from 'components/ScrollTop'

// import NewForm from 'components/NewForm'

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <div className="app">
      <AuthState>
        <Router basename="/">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="careernews" element={<CareerNews />} />
            <Route path="careerprediction" element={<MlForm />} />
            <Route path="predictitcareer" element={<NewForm />} />

            <Route path="contactus" element={<ContactUs />} />
            <Route path="mentorpage" element={<Mentors />} />

            <Route path="careers" element={<CareerCard />} />
            <Route path="swayamcourses" element={<Swayamcourses />} />
            <Route path="websitedata" element={<WebsiteData />} />

            <Route path="careers/:id" element={<CareerDetails />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="feedbacks" element={<Feedbacks />} />
              <Route path="mentors" element={<Mentors showLayout={false} />} />
              <Route path="review-mentor" element={<Review />} />

              <Route path="students" element={<Students showLayout={false} />} />
            </Route>

            <Route exact path="/signup" element={<PublicRoute />}>
              <Route exact path="" element={<Signup />} />
            </Route>
            <Route exact path="/login" element={<PublicRoute />}>
              <Route exact path="" element={<Login />} />
            </Route>

            <Route path="*" element={<Page404 />} />
          </Routes>
          <MyChatbot />
        </Router>
      </AuthState>
    </div>
  )
}

export default App
