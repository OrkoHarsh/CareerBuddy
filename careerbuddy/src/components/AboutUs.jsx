import React from 'react'
import styled from 'styled-components'
import {mobile6, mobile8, mobile10} from 'responsive'
const Container = styled.div`
  width: 100%;
`

const Heading = styled.div`
  text-align: center;
  color: #0048ff;
  font-size: 44px;
  margin-top: 40px;
  font-family: cursive;
  background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 50px;
`
const TextContainer = styled.div`
  width: 100%;
  // margin-left: auto;
  // margin-right: auto;
  display: flex;
  padding: 30px;
  flex-direction: row-reverse;
  margin-top: 16px;
`
const TextHeading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
`
const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  color: gray;

  font-size: 16px;
  margin-top: 12px;
`
const Image1 = styled.img`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`
const InnerContainer = styled.div`
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column-reverse;
  ${mobile10({display: 'flex', flexDirection: 'row'})}
`

function AboutUs() {
  return (
    <Container>
      <Heading>About Us</Heading>
      <InnerContainer>
        <div>
          <TextContainer>
            <div>
              <TextHeading>CareerBuddy</TextHeading>
              <Text>
                CareerBuddy is a web-based application that is a one-stop solution for students who
                are looking to shape their careers. Through this app, we are guiding the students
                toward their dream career path or if they are unsure about this, our CareerGenie
                would help them to decide on a career path based on their knowledge and skills.
                {/* <Image2 src='https://media.discordapp.net/attachments/1036195620693749825/1042049367705661461/image.png'/> */}
              </Text>
            </div>
          </TextContainer>
        </div>
        <div>
          <Image1 src="https://media.discordapp.net/attachments/1036195620693749825/1042050606463979540/image.png?width=816&height=602" />
        </div>
      </InnerContainer>
    </Container>
  )
}

export default AboutUs
