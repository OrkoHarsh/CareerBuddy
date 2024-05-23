import React, {useState} from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import {careerCategories, skills} from 'utils/constant'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Careerprediction from 'assets/Careerprediction.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
`
const Container1 = styled.div`
  height: 140px;
  width: 65%;
  background-color: #f4f3ff;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  gap: 40px;
  //   flex-direction: row;
`
const Title1 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  display: flex;

  color: #002b9a;

  span {
    text-decoration: underline;
  }
`
const Title2 = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;

  color: rgba(74, 49, 225, 0.89);
`
const InnerContainer = styled.div`
  width: 58%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Image = styled.img`
  height: 180px;
  //   padding: 20px;
`
const Container2 = styled.div``

const InnerContainer2 = styled.div`
  padding: 20px;
`
const InnerContainer3 = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`

const Form = styled.form`
  height: 400px;
  width: 70%;
  margin: 50px 0px;
  background-color: #eaf0ff;
  border-radius: 40px;
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
  padding: 20px 15px;
  color: rgba(74, 49, 225, 0.89);
`
const Input = styled.input`
  font-size: 18px;
  margin: 10px 15px;

  padding: 8px 20px;
  display: flex;
  width: 80%;
  background: white;
  border: none;
  color: gray;
  border-radius: 8px;
  ::placeholder {
    color: gray;
    font-size: 13px;
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
  border-radius: 25px;
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

function MlForm() {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleChange = selectedOption => {
    if (selectedOption.length === 9) {
      toast.error('You can select only 8 skills')
      return
    } else {
      setSelectedOptions(selectedOption)
    }

    console.log('handleChange', selectedOption)
  }
  const submitHandler = async e => {
    e.preventDefault()
    console.log('submitHandler', selectedOptions)
    const body = {}
    selectedOptions.forEach((option, idx) => {
      body[`Skill${idx + 1}`] = option.value
    })

    const res = await axios.post('https://careerbuddy-ml.onrender.com/predict_career', body)
    const score = res.data.prediction
    console.log('hi')
    for (const i in careerCategories) {
      if (careerCategories[i] === score) {
        alert(`Your career is ${i}`)
      }
    }
  }
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container1>
          <InnerContainer2>
            <Title1>
              CONFUSED BETWEEN MULTIPLE <span>CAREER</span> OPTIONS?
            </Title1>
            <InnerContainer>
              <Title2> We have a solution for you!</Title2>
            </InnerContainer>
          </InnerContainer2>
          <InnerContainer3>
            <Image src={Careerprediction} />
          </InnerContainer3>
        </Container1>
        <Title2>
          Use our machine learning career recommendation to get best career suggestion for you!
        </Title2>

        <Form onSubmit={submitHandler}>
          <Left>
            <InputName>FULL NAME:</InputName>
            <InputName>EMAIL:</InputName>
            <InputName>PHONE:</InputName>

            <InputName>CHOOSE 8 SKILLS YOU'RE PROFICIENT/PASSIONATE ABOUT:</InputName>
          </Left>
          <Right>
            <Input type="text" placeholder="Full Name" name="user_name" required />
            <Input type="email" placeholder="Email" name="user_email" required />
            <Input type="tel" placeholder="Phone" name="user_email" required />
            <OptionsContainer>
              <Select options={skills} value={selectedOptions} onChange={handleChange} isMulti />
            </OptionsContainer>
            <Button>Recommend me a career option</Button>
          </Right>
        </Form>
      </Wrapper>
      <Footer />
    </>
  )
}

export default MlForm
