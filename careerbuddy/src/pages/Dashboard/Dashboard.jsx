import styled from 'styled-components'
import {Outlet, useNavigate} from 'react-router-dom'
import SideNav from 'components/SideNav'
import {useContext} from 'react'
import authContext from 'context/auth/authContext'
import {useEffect} from 'react'
import {useState} from 'react'
import RightNav from 'components/RightNav'
import toast from 'react-hot-toast'
import {FaUserCircle} from 'react-icons/fa'
import {mobile} from 'responsive'
import Burger2 from 'components/Burger2'
import Sidebar from 'components/sidebar/Sidebar'

const Container = styled.div`
  display: flex;
  flex: 4;
  min-height: 100vh;
`

const LeftNav = styled.div`
  width: 20%;
  background-color: #7e8af5;
  padding: 2rem 1rem;
  ${mobile({display: 'none'})}
`

const Body = styled.div`
  width: 80vw;
`
const UserNav = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;

  div {
    .name {
      font-weight: 600;
      font-size: 20px;
      text-transform: capitalize;
    }
    .role {
      text-transform: capitalize;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: self-start;
  }
`
const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`
const Wrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color: #7e8af5;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6c7ae0;
  }
  // @media (max-width: 768px) {
  //   margin: 10% 0%;
  // }
`
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 2px;
  right: 2px;
  z-index: 200;
  display: none;

  @media (max-width: 768px) {
    display: block;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({open}) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({open}) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const Dashboard = () => {
  const {user, isAuthenticated, logout} = useContext(authContext)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const onLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/')
  }

  return (
    <Wrapper>
      <div style={{flex: '1'}}>
        <Sidebar />
      </div>
      <Container>
        <Body>
          {user ? (
            <UserNav>
              <UserDetails>
                <FaUserCircle size={22} />
                <span className="name">{user?.name}</span>(
                <span className="role">{user?.role}</span>)
              </UserDetails>
              <Button onClick={onLogout}>Logout</Button>
            </UserNav>
          ) : null}
          <Outlet />
        </Body>
      </Container>
    </Wrapper>
  )
}

export default Dashboard
