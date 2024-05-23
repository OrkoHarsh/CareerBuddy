import axios from 'axios'
import authContext from 'context/auth/authContext'
import {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'
import {IoTrashBinSharp} from 'react-icons/io5'
import toast from 'react-hot-toast'

const Wrapper = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  margin: 7% 10%;
`

const Heading = styled.p`
  font-size: 1.6rem;
  list-style: 1.2;
  margin-bottom: 8px;
  color: initial;
  text-align: center;
`

const FeedbacksContainer = styled.div``

const Feedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 20px;

  &:hover {
    background-color: rgb(224, 224, 224, 0.4);
  }
`
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`

const Feedbacks = () => {
  const [currUser, setCurrUser] = useState(null)

  const {user} = useContext(authContext)

  const getUser = async () => {
    try {
      const res = await axios.get(`https://careerbuddy-backend.onrender.com/api/user/${user?._id}`)
      const data = res.data.data.user
      setCurrUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleDelete = async review_id => {
    const res = await axios.delete(
      `https://careerbuddy-backend.onrender.com/user/review/${review_id}`,
    )
    if (res.status === 200) {
      toast.success('Review deleted successfully')
      getUser()
    }
  }

  return (
    <Wrapper>
      {currUser?.reviews?.length > 0 ? (
        <>
          <Heading>All the feedbacks you've received so far:</Heading>
          <FeedbacksContainer>
            {currUser?.reviews?.map((feedback, idx) => (
              <Feedback key={idx}>
                <p>{feedback.review}</p>
                <Rating>
                  <StarRatings
                    rating={feedback.rating}
                    starRatedColor="blue"
                    numberOfStars={5}
                    name="rating"
                    starDimension="36px"
                  />
                  <IoTrashBinSharp size={20} onClick={() => handleDelete(feedback._id)} />
                </Rating>
              </Feedback>
            ))}
          </FeedbacksContainer>
        </>
      ) : (
        <Heading>No feedbacks yet</Heading>
      )}
    </Wrapper>
  )
}

export default Feedbacks
