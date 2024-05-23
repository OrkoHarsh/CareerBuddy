import authContext from 'context/auth/authContext'
import {useContext} from 'react'
import styled from 'styled-components'
import {CgProfile} from 'react-icons/cg'
import {Roles} from 'utils/constant'
import {Link} from 'react-router-dom'

import './Profile.css'

const Profile = () => {
  const {user} = useContext(authContext)

  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}

export default Profile
