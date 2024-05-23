import axios from 'axios'

import authContext from 'context/auth/authContext'
import {useContext, useRef, useState} from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {Roles} from 'utils/constant'
const Form = styled.form`
  // background-color: rgba(126, 138, 245, 0.16);
  margin-left: auto;
  margin-right: auto;
  border-radius: 14px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 7% 10%;
  padding: 2rem 4rem;
  display: flex;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-content: end;
  width: 50%;
  //   background-color: white;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
const InputName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  padding: 15px 15px;
  color: rgba(74, 49, 225, 0.89);
`
const Input = styled.input`
  font-size: 14px;
  margin: 10px 15px;

  padding: 8px 20px;
  display: flex;
  width: 80%;
  background: white;
  border: none;
  color: gray;
  border-radius: 12px;
  ::placeholder {
    color: gray;
    font-size: 13px;
  }

  &.disabled {
    background: #f2f2f2;
    cursor: not-allowed;
  }
`
const OptionsContainer = styled.div`
  margin: 30px 0px;
  width: 90%;
`
const Button = styled.button`
  width: 55%;
  height: 30px;
  color: white;
  background-color: #012bc3;

  font-weight: 500;
  border: 0px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.5 ease;
  text-align: center;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`

const EditProfile = () => {
  const {user, isAuthenticated, logout, refetchUser} = useContext(authContext)
  const [resume, setResume] = useState('')
  const [formData, setFormData] = useState({
    name: user?.name,
    title: user?.title,
    profile_picture: user?.profile_picture,
    bio: user?.bio,
    skills: user?.skills?.join(','),
    meeting_link: user?.meeting_link,
  })

  const {name, title, profile_picture, bio, skills, meeting_link} = formData

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const resumeRef = useRef(null)
  const navigate = useNavigate()

  const onSubmit = async e => {
    e.preventDefault()
    const res = await axios.patch(`https://careerbuddy-backend.onrender.com/api/user/${user._id}`, {
      ...formData,
      skills: formData.skills.length ? formData.skills.split(',') : [],
    })
    if (res.status === 200) {
      refetchUser()
      navigate('/dashboard/profile')
      toast.success('Profile updated successfully')
    }
  }

  const uploadResume = async e => {
    e.preventDefault()
    const form = new FormData()
    form.append('the_file', resumeRef.current.files[0])
    const res = await axios.post('http://localhost:5000/getfile', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (res.status === 200) {
      toast.success('Resume uploaded successfully')
      setFormData({...formData, skills: formData.skills + ',' + res.data.join(',')})
    }
  }

  return (
    <div style={{display: 'flex'}}>
      <Form onChange={onChange} onSubmit={onSubmit}>
        <Left>
          <InputName>Name:</InputName>
          <InputName>Title:</InputName>
          <InputName>Email:</InputName>
          {user?.role === Roles.MENTOR ? <InputName>Meeting Link:</InputName> : null}
          <InputName>Profile Picture Link:</InputName>
          <InputName>bio:</InputName>
          <InputName style={{margin: '100px 0px'}}>skills:</InputName>
        </Left>
        <Right>
          <Input type="text" placeholder="Enter name" name="name" value={name} />
          <Input type="text" placeholder="Enter title" name="title" value={title} />
          <Input
            type="email"
            className="disabled"
            value={user?.email}
            placeholder=""
            name="email"
            disabled
          />
          {user?.role === Roles.MENTOR ? (
            <Input
              type="text"
              placeholder="Enter meeting link"
              name="meeting_link"
              value={meeting_link}
            />
          ) : null}
          <Input
            type="text"
            placeholder="Enter profile picture url"
            name="profile_picture"
            value={profile_picture}
          />
          <textarea
            name="bio"
            id="bio"
            value={bio}
            style={{
              width: '80%',
              height: '100px',
              padding: '10px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '14px',
              margin: '10px 15px',
            }}
          ></textarea>
          {/* <Input
            type="text"
            placeholder="Enter bio"
            name="bio"
            style={{height: '120px'}}
            value={bio}
          /> */}
          <textarea
            name="skills"
            id="skills"
            value={skills}
            style={{
              width: '80%',
              height: '100px',
              padding: '10px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '14px',
              margin: '10px 15px',
            }}
          ></textarea>
          <label
            htmlFor="skills"
            style={{
              fontsize: '12px',
              marginTop: '20px',
            }}
          >
            You can import skills from your resume as well.
          </label>
          <div
            className=""
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <input type="file" name="resume" id="resume" accept="application/pdf" ref={resumeRef} />
            <button
              onClick={uploadResume}
              type="button"
              style={{
                width: '100px',
                height: '18px',
                color: 'white',
                background: '#012bc3',
                border: '0px',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            >
              Upload Resume
            </button>
          </div>
          <Button style={{margin: '20px 20px'}}>Update</Button>
        </Right>
      </Form>
    </div>
  )
}

export default EditProfile
