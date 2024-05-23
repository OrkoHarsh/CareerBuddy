import axios from 'axios'
import authContext from 'context/auth/authContext'
import {useContext} from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'
const SettingContainer = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  margin: 7% 10%;
`

const OuterBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 85%;
  margin: 2% 0 7% 5%;
  font-size: 1.2rem;

  button {
    width: 7.5rem;
    height: 2.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: 5px;
    background-color: white;

    &.button {
      color: #093c7c;
      border: 1px solid #093c7c;
    }

    &.button:hover {
      color: white;
      background-color: #093c7c;
    }

    &.delBtn {
      color: red;
      border: 1px solid red;
    }

    &.delBtn:hover {
      color: white;
      background-color: red;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

const InnerBlock = styled.div`
  width: 70%;

  p {
    font-size: 1rem;
    color: #7e7e7e;
  }
  @media (max-width: 768px) {
    width: 100%;
    p {
      width: 100%;
      font-size: 0.9rem;
    }
  }
`

const Heading = styled.div`
  font-size: 1.6rem;
  list-style: 1.2;
  margin-bottom: 8px;
  color: initial;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Comp = props => {
  return (
    <OuterBlock>
      <InnerBlock>
        <Heading>{props.heading}</Heading>
        <p>{props.para}</p>
      </InnerBlock>
      <button
        className={props.btn === 'Delete Account' ? 'delBtn' : 'button'}
        onClick={props.onClick}
      >
        {props.btn}
      </button>
    </OuterBlock>
  )
}

const Settings = () => {
  const {user, logout} = useContext(authContext)

  const deleteHandler = async () => {
    const res = await axios.delete(`https://careerbuddy-backend.onrender.com/api/user/${user._id}`)
    if (res.status === 200) {
      logout()
      toast.success('Account Deleted')
    }
  }

  return (
    <SettingContainer>
      <Comp
        heading="Profile Settings"
        para="If you want to change you profile settings, you can do it here."
        btn="Profile Settings"
      />
      <Comp
        heading="Change password"
        para="Requires old password and OTP confirmation"
        btn="Reset Password"
      />
      <Comp
        heading="Change Role"
        para="If you want to change your role, you can contact us by raising a ticket."
        btn="Raise Ticket"
      />
      <Comp
        heading="Delete Account"
        para="You can delete your account and all the data associated with it. This action cannot be undone."
        btn="Delete Account"
        onClick={deleteHandler}
      />
    </SettingContainer>
  )
}

export default Settings
