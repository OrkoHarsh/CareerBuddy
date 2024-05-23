import React from 'react'
import styled from 'styled-components'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import {ImLocation} from 'react-icons/im'
import {AiOutlinePhone} from 'react-icons/ai'
import {mobile} from '../responsive'
import {mobile4} from '../responsive'
const Container = styled.div`
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  background-color: #f9f9f9;
  flex-direction: column;
  ${mobile({fontSize: '90%'})}
`

const Left = styled.div`
  color: black;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`


margin:20px 0px;
color:gray;
font-size:15px;
display:flex;
align-items:center;
// text-align:center;
font-weight:400;
${mobile({display: 'flex', justifyContent: 'center'})}
${mobile4({fontSize: '14px'})}
${mobile4({fontSize: '13px'})}



`

const SocialContainer = styled.h1`
  display: flex;
`
const SocialIcon = styled.div`
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.2);
  }
`

const Center = styled.div`
  color: black;
  // flex: 5;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  // flex-wrap:wrap;
  flex-direction: column;
`
const ListItem = styled.li`
  // width: 100%;
  margin-bottom: 10px;
`
const Right = styled.div`
  color: black;
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: '#f9f9f9'})}
`
const Rightest = styled.div`
flex=1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${mobile({display: 'flex', flexDirection: 'row'})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Logoimg1 = styled.img`
  width: 70%;

  ${mobile({width: '50%'})}
`
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>CareerBuddy</Logo>
          <Desc>
            CareerBuddy is a web-based application that is a one-stop solution for students who are
            looking to shape their careers.{' '}
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <AiFillFacebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <AiFillInstagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <FiMail />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>ABOUT US</ListItem>
            <ListItem>CONTACT US</ListItem>
            <ListItem>PRIVACY POLICY</ListItem>
            <ListItem>TERMS & CONDITIONS</ListItem>
          </List>
        </Center>
        <Right>
          <Title>SERVICES</Title>
          <ContactItem>CAREER GUIDANCE</ContactItem>
          <ContactItem>DISCUSS FORUM</ContactItem>
        </Right>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <ImLocation style={{marginRight: '10px'}} /> South Delhi, New Delhi-110044
          </ContactItem>
          <ContactItem>
            <AiOutlinePhone style={{marginRight: '10px'}} /> +91 8505865578
          </ContactItem>
          <ContactItem>
            <FiMail style={{marginRight: '10px'}} /> panchalmohitg2002@gmail.com
          </ContactItem>
          {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer
