import styled from 'styled-components'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Logo from 'assets/logo/uia_small.png'
import {Link, useNavigate} from 'react-router-dom'
import {GrGoogle} from 'react-icons/gr'
import {AiFillFacebook} from 'react-icons/ai'
import {useContext, useEffect, useState} from 'react'
import authContext from 'context/auth/authContext'
import toast from 'react-hot-toast'
import {mobile} from 'responsive'

const Container = styled.div`
  margin: 50px 0px;
`
const Heading = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  // line-height: 55px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  ${mobile({fontSize: '25px'})}
`
const Form = styled.form`
  width: 500px;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin: 40px auto;
  border-radius: 14px;
  ${mobile({width: '350px', height: 'fit-content'})}
  background-color: white;
  border: 0.1px solid blue;
  // box-shadow: 2px 2px 2px lightgray;
`
const InputName = styled.p`
  padding: 8px 10px;
  margin: 0px 20px;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
`

const Input = styled.input`
  font-size: 18px;
  padding: 8px 20px;

  display: flex;
  width: 80%;

  margin-left: auto;
  margin-right: auto;
  background: white;

  border: none;
  // border-radius: 15px;

  border-radius: 10px;
  ::placeholder {
    // color: gray;
    font-size: 12px;
  }
`
const Button = styled.button`
  font-size: 18px;
  padding: 8px 20px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: #2666cf;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

const Button1 = styled.button`
  margin: 10px 0px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  color: black;

  border: 1px solid blue;
  border-radius: 25px;
  cursor: pointer;
`
const ButtonContainer = styled.div`
  display: flex;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`
const Text1 = styled.p`
  cursor: pointer;

  // width: 200%;
`

const Img = styled.img`
  margin: auto;
  height: 80px;
  width: 180px;
  display: block;
`
// const Text2= styled.p`

// `

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const {email, password} = user

  const {isAuthenticated, error, login, clearError} = useContext(authContext)

  const onChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard/')
    }
  }, [isAuthenticated])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await login(user)
      if (!error) toast.success('Logged in Successfully')
    } catch (err) {
      toast.error(error)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      clearError()
    }
  }, [error])

  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Img src={Logo} alt="logo" />
          <Heading>Log In</Heading>
          <InputName>Email</InputName>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={onChange}
          />

          <InputName>Password</InputName>

          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChange}
          />

          <p
            style={{
              textAlign: 'right',
              fontSize: '15px',
              color: 'gray',
              padding: '0px 40px',
              fontFamily: '',
            }}
          >
            I forgot my password
          </p>

          <Button>Log In</Button>
          <TextContainer>
            <Text1>Don't have an account? </Text1>
            <Text1>
              <Link to="/signup">Sign Up</Link>
            </Text1>
          </TextContainer>
          {/* <ButtonContainer>
            <Button1 style={{fontSize: '12px'}}>
              <GrGoogle style={{padding: '0px 10px'}} /> Continue With Google
            </Button1>
            <Button1 style={{fontSize: '12px'}}>
              <AiFillFacebook style={{padding: '0px 10px'}} />
              Continue With Facebook
            </Button1>
          </ButtonContainer> */}
        </Form>
      </Container>
      <Footer />
    </>
  )
}

export default Login
