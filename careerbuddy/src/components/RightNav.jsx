import React, {useContext} from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import authContext from 'context/auth/authContext'
import toast from 'react-hot-toast'
import Logo from 'assets/logo/new_careerbuddy_logo.png'
import {HashLink} from 'react-router-hash-link'
import {mobile} from 'responsive'

const Container = styled.div`
  background-color: #f9f9f9;
  color: white;
  /* border-bottom: */
  // border:2px solid black;
  // height:140px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`
const Wrapper = styled.div`
  padding: 10px 20px;
  border-bottom: 2px solid lightgray;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  align-items: center;
  height: 70px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  // flex:1;
`

const Button = styled.button`
  border: none;
  margin: 0px 10px;
  color: #333333;
  padding: 0px 5px;
  background-color: #f9f9f9;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: #012bc3;
  }
`
const Image2 = styled.img`
  /* height: 6vh; */
  height: 70px;
  /* width: 100px; */
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const Image = styled.img`
  height: 2vh;
  margin-left: 10px;
`
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
`
const Bar = styled.div`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
`
const Button1 = styled.div`
  height: 40px;
  color: black;
  width: 150px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #f9f9f9;
  border-radius: 20px;
  border: 2px solid #012bc3;
  // border: 1.8px solid #000000;
  &:hover {
    background-color: #012bc3;
    color: white;
  }
`

const LogoutBtn = styled.button`
  height: 35px;
  color: black;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: #f9f9f9;
  color: #012bc3;
  // border-radius: 20px;
  font-size: 20px;
  &:hover {
    background-color: #012bc3;
    color: white;
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: #f9f9f9;
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

const RightNav = ({open}) => {
  const {isAuthenticated, logout} = useContext(authContext)
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/')
  }
  return (
    <Ul open={open}>
      <li>
        <Link to="/">
          <Image2 src={Logo} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </li>
      <li>
        {!isAuthenticated ? (
          <Link to="/login" style={{textDecoration: 'none'}}>
            <Button> login into Dashboard</Button>
          </Link>
        ) : (
          <Link to="/dashboard/profile">
            <Button>Dashboard</Button>
          </Link>
        )}
      </li>
      <li>
        <Link to="/careernews">
          <Button>Career News</Button>
        </Link>
      </li>

      <li>
        <HashLink to="/#faq">
          <Button>FAQs</Button>
        </HashLink>
      </li>
      <li>
        <Link to="/contactus">
          <Button>Contact Us</Button>
        </Link>
      </li>
      <div>
        <li>
          {!isAuthenticated ? (
            <Link to="/login" style={{textDecoration: 'none'}}>
              <Button1>Log In</Button1>
            </Link>
          ) : (
            <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>
          )}
        </li>
      </div>

      {/* </Container> */}
    </Ul>
  )
}

export default RightNav
