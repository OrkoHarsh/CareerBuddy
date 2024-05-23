import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {GoPrimitiveDot} from 'react-icons/go'
import data from 'utils/careerpath.json'

import {useParams, useSearchParams} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
const Container = styled.div`
  width: 80%;
  box-shadow: 3px 3px 10px lightgray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  margin: 10px auto;

  padding: 20px;
`
const Wrapper = styled.div``
const Title = styled.h1`
  text-align: center;
  padding: 20px;
  font-family: cursive;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`
const InnerContainer = styled.div`
  display: block;
  padding: 10px;
`
const Heading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  flex-grow: 1;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`
const About = styled.p``

function CareerDetails() {
  const [career, setCareer] = useState({})

  const params = useParams()
  useEffect(() => {
    const t = data.career.find(d => d.id == params.id)
    setCareer(t)
  }, [params.id])
  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>{career.title}</Title>
        <Container>
          <InnerContainer>
            <Heading>About the position:</Heading>
            <About>{career.about}</About>
          </InnerContainer>
          <InnerContainer>
            <Heading>Skills Required:</Heading>
            <About>{career.skills}</About>
          </InnerContainer>

          <InnerContainer>
            <Heading>Is degree required:</Heading>
            <About>{career.degree}</About>
          </InnerContainer>

          <InnerContainer>
            <Heading>Average Salary:</Heading>
            <About>{career.avgsalary}</About>
          </InnerContainer>
          <InnerContainer>
            <Heading>Pre Requisites:</Heading>
            <About style={{alignSelf: 'flex-start'}}>
              <ul>
                <li>{career.prerequesite1}</li>
                <li>{career.prerequesite2}</li>
              </ul>
            </About>
          </InnerContainer>

          <InnerContainer>
            <Heading>Link:</Heading>
            <About>
              <a href={career.link}>Go to course</a>
            </About>
          </InnerContainer>
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}

export default CareerDetails
