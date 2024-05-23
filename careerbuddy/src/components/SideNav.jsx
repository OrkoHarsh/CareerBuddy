import {useContext} from 'react'
import authContext from 'context/auth/authContext'
import {Roles} from 'utils/constant'
import Logo from 'assets/logo/uia_small.png'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaChevronLeft, FaUserAlt, FaUserEdit, FaUserGraduate} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdRateReview} from 'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import {Nav} from 'react-bootstrap'

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: block;
  margin-bottom: 60px;
`

const Route = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 4px 4px 16px;
  border-radius: 8px;
  a {
    text-decoration: none;
    color: white;
    font-size: 15x;
    font-weight: 300;
  }

  &:hover {
    background-color: rgb(255, 255, 255, 0.2) !important;
  }
`
const Ul = styled.ul`
  list-style: none;
  padding:20px 0px
  // margin-right: auto;
  // margin-left: auto;
  // align-items: left;
  flex-flow: row nowrap;
  background-color: rgb(142, 36, 170);
    padding: 0px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: rgb(142, 36, 170);
    position: fixed;
    z-index: 100;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 10px 9px;
      
    }
  }
`

const Image2 = styled.img`
  /* height: 6vh; */
  height: 70px;
  /* width: 100px; */
`
const Button = styled.button`
  border: none;
  margin: 0px 10px;
  color: #333333;
  padding: 0px 5px;
  color: white;
  padding: 20px;
  background-color: rgb(142, 36, 170);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  cursor: pointer;
  width: 100%;
  &:hover {
    color: pink;
  }
`
const RoutesContainer = styled.div``

const SideNav = ({open}) => {
  const {user} = useContext(authContext)
  const routes =
    user?.role === Roles.MENTOR
      ? [
          {
            name: 'Back to Landing Page',
            path: '/',
            icon: <FaChevronLeft size={18} color={'#fff'} />,
          },
          {
            name: 'Profile',
            path: '/dashboard/profile',
            icon: <FaUserAlt size={18} color={'#fff'} />,
          },

          {
            name: 'Students',
            path: '/dashboard/students',
            icon: <FaUserGraduate size={18} color={'#fff'} />,
          },
          {
            name: 'Feedbacks',
            path: '/dashboard/feedbacks',
            icon: <VscFeedback size={18} color={'#fff'} />,
          },
        ]
      : [
          {
            name: 'Back to Landing',
            path: '/',
            icon: <FaChevronLeft size={18} color={'#fff'} />,
          },
          {
            name: 'Profile',
            path: '/dashboard/profile',
            icon: <FaUserAlt size={18} color={'#fff'} />,
          },
          {
            name: 'Edit Profile',
            path: '/dashboard/edit-profile',
            icon: <FaUserEdit size={18} color={'#fff'} />,
          },
          {
            name: 'Mentors',
            path: '/dashboard/mentors',
            icon: <FaUserGraduate size={18} color={'#fff'} />,
          },
          {
            name: 'Review Mentor',
            path: '/dashboard/review-mentor',
            icon: <MdRateReview size={18} color={'#fff'} />,
          },
        ]
  return (
    <Ul open={open}>
      <Img src={Logo} alt="logo" />
      {routes.map((route, idx) => (
        <RoutesContainer>
          <li>
            <Link to={route.path}>
              <Button>{route.name}</Button>
            </Link>
          </li>
        </RoutesContainer>
      ))}
    </Ul>
  )
}

export default SideNav
