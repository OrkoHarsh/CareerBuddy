import React, {Fragment, useState, useEffect} from 'react'
import styled from 'styled-components'
import Slider from 'react-input-slider'
import axios from 'axios'
import toast from 'react-hot-toast'
import StarRatings from 'react-star-ratings'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Form = styled.form`
  width: 500px;
  border-radius: 10px;
  // background-color: #fff;
  border: 1px solid blue;
  height: fit-content;
  // padding: 20px;
  margin-top: -1%;
  @media (max-width: 768px) {
    width: 350px;
  }
`
const InputName = styled.p`
  padding: 20px 0 10px 0;
`

const Title = styled.p`
  // padding: 20px;
  font-size: 30px;
  font-weight: 600;
`

const Input = styled.input`
  //   padding: 0px;
  border-radius: 10px;
  height: 140px;
  width: 450px;
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

function Review() {
  const [formData, setFormData] = useState({
    for: '',
    rating: 0,
    review: '',
  })

  const [mentors, setMentors] = useState([])
  const getMentors = async () => {
    const res = await axios.get('https://careerbuddy-backend.onrender.com/api/user/mentors')
    setMentors(res.data?.data?.users)
  }

  useEffect(() => {
    getMentors()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    const res = await axios.patch(
      `https://careerbuddy-backend.onrender.com/api/user/${formData.for}/review`,
      {
        rating: formData.rating,
        review: formData.review,
      },
    )
    if (res.status === 200) {
      toast.success('Review submitted successfully')
      setFormData({
        for: '',
        rating: 0,
        review: '',
      })
    }
  }
  // const changeRating = rating => this.props.dispatch(fooActions.setRating(rating))

  return (
    <Container>
      {/* <Title>Rate Our Mentors</Title> */}
      <InputName>Rate Our Mentors</InputName>
      <Form onSubmit={handleSubmit}>
        <InputName>Select the mentor</InputName>

        <select
          style={{width: '90%', height: '30px', padding: '0px 20px', borderRadius: '4px'}}
          required
          value={formData.for}
          onChange={e => setFormData({...formData, for: e.target.value})}
        >
          <option selected disabled value="">
            choose mentor
          </option>
          {mentors.map((mentor, idx) => (
            <option value={mentor._id} key={idx}>
              {mentor.name} - {mentor.email}
            </option>
          ))}
        </select>

        <div
          style={{
            marginTop: '24px',
          }}
        >
          <label>Rate the mentor from 1 to 5</label>

          <StarRatings
            starDimension="30px"
            starSpacing="15px"
            numberOfStars={5}
            isSelectable={true}
            rating={formData.rating}
            starRatedColor="gold"
            changeRating={newRating => setFormData({...formData, rating: newRating})}
          />
        </div>

        <InputName>What do you want to say about the mentor?</InputName>
        <textarea
          style={{
            width: '90%',
            resize: 'none',
            borderRadius: '10px',
            outline: 'none',
            // border: 'none',
            padding: '12px 20px',
            // backgroundColor: 'lightgray',
          }}
          value={formData.review}
          onChange={e => setFormData(prev => ({...prev, review: e.target.value}))}
        ></textarea>
        <button
          style={{
            width: '90%',
            height: '40px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#2f80ed',
            color: 'white',
            marginTop: '20px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </Form>
    </Container>
  )
}

export default Review
