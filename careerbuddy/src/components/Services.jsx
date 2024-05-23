import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Container = styled.div`
  width: 100%;

  margin-top: 32px;
`

const Heading1 = styled.h1`
  text-align: center;
  padding: 20px;
  font-family: cursive;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 50px;
`
const Heading2 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 0px 50px;
  color: #525252;
`
const CardContainer = styled.div`
  display: flex;
  // gap: 50px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  // padding: 2rem 4rem;
  align-content: flex-start;
  row-gap: 50px;
`

const Card = styled.div`
  background-color: white;
  /* height: 60%; */
  width: 300px;
  gap: 50px;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  box-shadow: 3px 3px 10px lightgray;
  // margin: 20px;
`
const CardHeadingContainer1 = styled.div`
  max-width: max-content;
  // padding: 2px 10px;
  border-radius: 20px;
  display: flex;

  background-color: rgba(12, 190, 100, 0.15);
`
const CardHeadingContainer2 = styled.div`
  max-width: max-content;
  padding: 2px 8px;
  border-radius: 20px;
  background-color: rgba(220, 0, 0, 0.1);
`
const CardHeadingContainer3 = styled.div`
  max-width: max-content;
  padding: 2px 8px;
  border-radius: 20px;
  background-color: rgba(176, 0, 220, 0.11);
`
const CardHeadingContainer4 = styled.div`
  max-width: max-content;
  padding: 2px 8px;
  border-radius: 20px;

  background-color: rgba(0, 88, 220, 0.09);
`
const CardHeading1 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #0cbe64;
  padding: 10px 8px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
`
const CardHeading2 = styled.p`
  font-style: normal;
  font-weight: 400;

  font-size: 12px;
  color: #dc0000;
  padding: 10px 8px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
`
const CardHeading3 = styled.p`
  font-style: normal;
  font-weight: 400;
  padding: 10px 8px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  font-size: 12px;
  color: #dc0000;
`
const CardHeading4 = styled.p`
  font-style: normal;
  font-weight: 400;
  padding: 10px 8px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  font-size: 12px;
  color: #0058dc;
`

const CardText = styled.p`
  // position:absolute;

  margin-top: 16px;

  font-size: 14px;
  color: gray;
`
const Arrow = styled.div`
  color: red;
`
const ArrowContainer = styled.div``

function Services() {
  return (
    <Container>
      <Heading1>Services</Heading1>
      <Heading2>We provide one of the best supports in career pathway</Heading2>

      <CardContainer>
        <Card>
          <CardHeadingContainer1>
            <CardHeading1>Know Your Career Path</CardHeading1>
          </CardHeadingContainer1>
          <CardText>
            If you know which career you want to choose, you can easily get the information about
            that career and know the path.
          </CardText>
          <Arrow>
            <Link to="/careers">
              <AiOutlineArrowRight
                style={{
                  display: 'flex',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: '40px',
                  textDecoration: 'none',
                }}
              />
            </Link>
          </Arrow>
        </Card>
        <Card>
          <CardHeadingContainer2>
            <CardHeading2>Predict Your Career</CardHeading2>
          </CardHeadingContainer2>
          <CardText>
            If you don't know what to do in the future but you have few skills, you can easily
            predict your career on the basis of your skills.
          </CardText>
          <Arrow>
            <Link to="/careerprediction">
              <AiOutlineArrowRight
                style={{
                  display: 'flex',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: '40px',
                  textDecoration: 'none',
                }}
              />
            </Link>
          </Arrow>
        </Card>
        <Card>
          <CardHeadingContainer3>
            <CardHeading3>Predict IT Career</CardHeading3>
          </CardHeadingContainer3>
          <CardText>
            If you want to go in the field the of IT you can predict by using our ml tool, it will
            suggest you the best possible career for you
          </CardText>
          <Arrow>
            <Link to="/predictitcareer">
              <AiOutlineArrowRight
                style={{
                  display: 'flex',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: '40px',
                  textDecoration: 'none',
                }}
              />
            </Link>
          </Arrow>
        </Card>
        <Card>
          <CardHeadingContainer4>
            <CardHeading4>Contact Mentor</CardHeading4>
          </CardHeadingContainer4>
          <CardText>
            If you are very confused about your decision you can contact any mentor after logging in
            and can schedule a meeting.
          </CardText>
          <ArrowContainer>
            <Arrow>
              <Link to="/mentorpage">
                <AiOutlineArrowRight
                  style={{
                    display: 'flex',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: '40px',
                  }}
                />
              </Link>
            </Arrow>
          </ArrowContainer>
        </Card>

        <Card>
          <CardHeadingContainer4>
            <CardHeading4>Swayam NPTEL courses</CardHeading4>
          </CardHeadingContainer4>
          <CardText>
            We recommending many swayam courses which you can choose accordingly and can learn
            different skill set.
          </CardText>
          <ArrowContainer>
            <Arrow>
              <Link to="/swayamcourses">
                <AiOutlineArrowRight
                  style={{
                    display: 'flex',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    fontSize: '40px',
                  }}
                />
              </Link>
            </Arrow>
          </ArrowContainer>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default Services
