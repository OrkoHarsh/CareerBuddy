import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import './CardSlider.css'
import 'react-alice-carousel/lib/alice-carousel.css'
import {mobile} from 'responsive'

import styled from 'styled-components'
const responsive = {
  0: {items: 1},
  568: {items: 2},
  1024: {items: 3},
}

const Item = styled.div`
  height: 290px;
  width: 80%;
  padding: 20px;
  background-color: rgba(126, 138, 245, 0.16);
  margin-left: auto;
  margin-right: auto;
  border-radius: 14px;
`
const Container = styled.div`
  width: 80%;
  // background-color:blue;
  margin-left: auto;

  margin-right: auto;
`
const TimeSalary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  // margint
`
const Time = styled.div`
  height: 20px;
  font-size: 13px;
  width: 30%;
  color: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 98, 10, 0.64);
`
const Salary = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
`

const Title = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  /* identical to box height */

  color: #000000;
`
const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 187.5%;
  /* or 19px */
  text-align: center;

  color: #525252;
`
const Button = styled.button`
  position: relative;
  background-color: #c3c8fe;
  border-radius: 17px;
  border: none;
  cursor: pointer;
  width: 40%;
  height: 30px;
  margin: 15px 0px;
  color: black;
  // height:100px;
  &:hover {
    transition: all 1s ease;
    transform: scale(1.1);
    background-color: blue;
    color: white;
  }
`
const Wrapper = styled.div`
  // margin-top:-20px;
`

const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 57px;
  padding: 25px;
  color: #002b9a;
  ${mobile({fontSize: '30px', padding: '18px'})}
`

function CardSlider() {
  return (
    <Container>
      <Heading style={{fontFamily: 'serif'}}>BROWSE JOBS</Heading>
      <AliceCarousel
        mouseTracking
        // items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      >
        <Item>
          <TimeSalary>
            <Time>hourly</Time>
            <Salary>55$</Salary>
          </TimeSalary>
          <Wrapper>
            <Title>UI/UX DESIGNER</Title>
            <Description>
              UI/UX design aims to create a positive user experience . While a UX Designer decides
              how the user interface works.
              <br />
              <Button>View job</Button>
            </Description>
          </Wrapper>
        </Item>

        {/* card2------------------- */}
        <Item>
          <TimeSalary>
            <Time style={{backgroundColor: 'rgba(39, 220, 10, 0.64)'}}>hourly</Time>
            <Salary>55$</Salary>
          </TimeSalary>
          <Wrapper>
            <Title>UI/UX DESIGNER</Title>
            <Description>
              UI/UX design aims to create a positive user experience . While a UX Designer decides
              how the user interface works.
              <br />
              <Button>View job</Button>
            </Description>
          </Wrapper>
        </Item>

        <Item>
          <TimeSalary>
            <Time style={{backgroundColor: 'rgba(220, 10, 73, 0.64)'}}>hourly</Time>
            <Salary>55$</Salary>
          </TimeSalary>
          <Wrapper>
            <Title>UI/UX DESIGNER</Title>
            <Description>
              UI/UX design aims to create a positive user experience . While a UX Designer decides
              how the user interface works.
              <br />
              <Button>View job</Button>
            </Description>
          </Wrapper>
        </Item>
        <Item>
          <TimeSalary>
            <Time style={{backgroundColor: 'rgba(220, 10, 73, 0.64)'}}>hourly</Time>
            <Salary>55$</Salary>
          </TimeSalary>
          <Wrapper>
            <Title>UI/UX DESIGNER</Title>
            <Description>
              UI/UX design aims to create a positive user experience . While a UX Designer decides
              how the user interface works.
              <br />
              <Button>View job</Button>
            </Description>
          </Wrapper>
        </Item>
      </AliceCarousel>
    </Container>
  )
}

export default CardSlider
