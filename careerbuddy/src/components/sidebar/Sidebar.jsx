import {Link, useLocation} from 'react-router-dom'
import './Sidebar.css'

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material'
import {useContext} from 'react'
import authContext from 'context/auth/authContext'
import {Roles} from 'utils/constant'
import Logo from 'assets/logo/uia_small.png'
import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import {FaChevronLeft, FaUserAlt, FaUserEdit, FaUserGraduate} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import {Nav} from 'react-bootstrap'

export default function Sidebar() {
  const location = useLocation()

  const {user} = useContext(authContext)
  const routes =
    user?.role === Roles.MENTOR
      ? [
          {
            name: 'Back to Landing Page',
            path: '/',
            icon: <FaChevronLeft color="black" />,
          },
          {
            name: 'Profile',
            path: '/dashboard/profile',
            icon: <FaUserAlt color="black" />,
          },

          {
            name: 'Students',
            path: '/dashboard/students',
            icon: <FaUserGraduate color="black" />,
          },
          {
            name: 'Feedbacks',
            path: '/dashboard/feedbacks',
            icon: <VscFeedback color="black" />,
          },
        ]
      : [
          {
            name: 'Back to Landing',
            path: '/',
            icon: <FaChevronLeft color="black" />,
          },
          {
            name: 'Profile',
            path: '/dashboard/profile',
            icon: <FaUserAlt color="black" />,
          },
          {
            name: 'Edit Profile',
            path: '/dashboard/edit-profile',
            icon: <FaUserEdit color="black" />,
          },
          {
            name: 'Mentors',
            path: '/dashboard/mentors',
            icon: <FaUserGraduate color="black" />,
          },
          {
            name: 'Review Mentor',
            path: '/dashboard/review-mentor',
            icon: <MdRateReview color="black" />,
          },
        ]
  function onMenuClick() {
    var navbar = document.getElementById('sidebar')
    var responsive_class_name = 'responsive'
    navbar.classList.toggle(responsive_class_name)
    var maxHeight = window.getComputedStyle(navbar).maxHeight
  }

  return (
    <div className="nav-container">
      <div className="sidebar" id="sidebar">
        <div className="sidebarWrapper">
          {routes.map((route, idx) => (
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <li className={`sidebarListItem ${location.pathname === '/' && 'active'}`}>
                  {route.icon}
                  <Link
                    to={route.path}
                    style={{textDecoration: 'none', color: '#555', padding: '0 20px'}}
                  >
                    {route.name}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <a id="menu-icon" class="menu-icon" onClick={onMenuClick}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  )
}
