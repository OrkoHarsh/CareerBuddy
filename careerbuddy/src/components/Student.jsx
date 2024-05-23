import authContext from 'context/auth/authContext'
import React from 'react'
import {useContext} from 'react'
import {GrEmoji} from 'react-icons/gr'

import styled from 'styled-components'

const Info = styled.div`
  width: 100%;
  font-weight: 900;
  text-align: center;
  height: 15%;

  color: white;

  align-items: flex-end;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  // flex:1;
  margin: 20px 50px;
  min-width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border-radius: 7%;
  border: none;
  border-radius: 15px;
  background-color: white;
  box-shadow: 2px 5px 5px lightgrey;
`

const Image = styled.img`
  height: 30%;
  border-radius: 50%;
  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`

const Icon = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  /* identical to box height */

  color: #114270;
  margin: 10px;
  transition: all 0.5s ease;
  bottom: 0;
  line-height: 50%;

  &:hover {
    transform: scale(1.2);
  }
`
const Icon2 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  /* identical to box height */

  color: gray;
  margin: 10px;
  transition: all 0.5s ease;
  bottom: 0;
  line-height: 50%;
  &:hover {
    background-color: #7e8af5;
    transform: scale(1.2);
  }
`

const Student = ({item}) => {
  const {isAuthenticated} = useContext(authContext)
  const {user} = useContext(authContext)

  return (
    <Container>
      {/* <Circle /> */}
      {item?.profile_picture?.length ? (
        <Image src={item?.profile_picture} alt="User" />
      ) : (
        <GrEmoji
          style={{
            // fontSize: '80px',
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '50%',
            height: '30%',
            width: '30%',
            borderRadius: '50%',
            fontWeight: '100',
          }}
        />
      )}
      <Info>
        <Icon>{item.name}</Icon>
        <Icon2>{item.designation}</Icon2>
      </Info>
    </Container>
  )
}

export default Student
