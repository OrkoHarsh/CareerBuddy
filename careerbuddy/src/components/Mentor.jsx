import authContext from 'context/auth/authContext'
import React from 'react'
import {useContext} from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5px 20px;
  min-width: 180px;
  height: 220px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7%;
  background-color: rgba(126, 138, 245, 0.16);
`

const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`

const Icon = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: black;
  margin-bottom: 5px;
  text-align: center;
`

const Subtitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
  text-align: center;
`

const Rating = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: gray;
  margin-bottom: 5px;
  text-align: center;
`

const Button = styled.button`
  background-color: #fff;
  border-radius: 4px;
  border: none;
  color: #333;
  font-size: 16px;
  padding: 10px 20px;
  transition: all 0.3s ease;

  button:hover {
    background-color: #333;
    color: #fff;
  }
`

const Mentor = ({item}) => {
  const {isAuthenticated} = useContext(authContext)

  const rating =
    item?.reviews?.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / item?.reviews?.length

  return (
    <Container>
      {item?.profile_picture?.length ? (
        <Image src={item?.profile_picture} alt="Profile picture" />
      ) : (
        <AiOutlineUser size={80} color="white" />
      )}
      <Icon>{item.name}</Icon>
      <Subtitle>{item.title}</Subtitle>
      {rating ? <Rating>Rating: {rating.toFixed(1)}</Rating> : null}
      {isAuthenticated ? (
        item?.meeting_link ? (
          <Button>
            <a
              href={item?.meeting_link}
              target="_blank"
              rel="noreferrer"
              style={{textDecoration: 'none', color: 'black'}}
            >
              Schedule a meeting
            </a>
          </Button>
        ) : (
          <Button>
            <a
              href={`mailto:${item?.email}`}
              target="_blank"
              rel="noreferrer"
              style={{textDecoration: 'none', color: 'black'}}
            >
              Contact via email
            </a>
          </Button>
        )
      ) : null}
    </Container>
  )
}

export default Mentor
