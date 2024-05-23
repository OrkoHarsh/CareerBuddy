import Select from 'react-select'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import authContext from 'context/auth/authContext'
import {useContext, useEffect, useState} from 'react'
import {userRoles} from 'utils/constant'
import {Link, useNavigate} from 'react-router-dom'
import Logo from 'assets/logo/uia_small.png'
import {mobile} from 'responsive'

const Container = styled.div``
const Form = styled.form`
  width: 500px;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin: 40px auto;
  border-radius: 14px;
  ${mobile({width: '350px', height: 'fit-content'})}
  background-color: #f9f9f9;
  box-shadow: 2px 2px 2px lightgray;
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

const InputName = styled.p`
  padding: 8px 10px;
  margin: 0px 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  color: #000000;
`

const Input = styled.input`
  font-size: 18px;
  padding: 8px 20px;
  //   margin:10px 0px;
  display: flex;
  width: 80%;
  //   color:black;
  margin-left: auto;
  margin-right: auto;
  background: white;
  // background-color:rgba(126, 138, 245, 0.16);

  border: none;
  border-radius: 10px;
  ::placeholder {
    color: gray;
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

const Img = styled.img`
  margin: auto;
  height: 80px;
  width: 180px;
  display: block;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`
const Text1 = styled.p`
  cursor: pointer;
`

function Signup() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {email, name, password, confirmPassword} = user
  const {signup, error, clearError, isAuthenticated} = useContext(authContext)

  const onChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
      toast.success('Account created successfully!')
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (error) {
      toast.error(error)
      clearError()
    }
  }, [error])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (!selectedOption) {
        toast.error('Please select a role')
        return
      }
      if (password !== confirmPassword) {
        toast.error("Both Passwords don't match!")
        return
      }
      await signup({name, email, password, role: selectedOption.value})
    } catch (err) {}
  }

  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Img src={Logo} alt="logo" />
          <Heading>Sign Up</Heading>
          <InputName>Name</InputName>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
            required
          />
          <InputName>Email</InputName>
          <Input
            type="email"
            id="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <InputName>I am a</InputName>
          <label
            style={{
              display: 'block',
              margin: 'auto',
              width: '80%',
            }}
          >
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={userRoles}
              placeholder="Select your role"
            />
          </label>
          <InputName>Password</InputName>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChange}
          />
          <InputName>Confirm Password</InputName>
          <Input
            type="password"
            placeholder="Verify password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChange}
          />
          <Button type="submit">Create Account</Button>
          {/* <p style={{textAlign: 'center', fontSize: '20px', color: 'gray'}}>or</p>
          <Button style={{fontSize: '15px'}} type="button">
            <GrGoogle size={20} color={'#fff'} /> Continue With Google
          </Button>
          <Button style={{fontSize: '15px'}} type="button">
            <AiFillFacebook size={20} color={'#fff'} />
            Continue With Facebook
          </Button> */}
          <TextContainer>
            <Text1>Already have an account?</Text1>
            <Text1>
              <Link to="/login">Login</Link>
            </Text1>
          </TextContainer>
        </Form>
      </Container>
      <Footer />
    </>
  )
}

export default Signup
