import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
// margin-left:auto;
// margin-right:auto;
`
const Left1 = styled.div`
align-self:stretch;
display:flex;
align-items:center;

height:200px;
width:200px;
border-radius:50%;

background-color: #EEC1BB;
`
const Center = styled.div`
align-self:center;
// margin-left:auto;
// margin-right:auto;

`
const Right1 = styled.div`
height:150px;
width:150px;
border-radius:50%;
background-color:#8946A6;
display:flex;
align-items:center;

`
const Image = styled.img`
height:12rem;


`
const Left2 = styled.div`
flex:2;

height:200px;
width:200px;
border-radius:50%;

background-color: #EEC1BB;
`
const Right2 = styled.div`

height:150px;
width:150px;
border-radius:50%;
background-color:#8946A6;

`
const Circle1 = styled.div`
height:150px;
width:150px;
border-radius:50%;
background-color:#7E8AF5;
display:flex;
align-items:center;

`
const Circle2 = styled.div`
height:200px;
width:200px;
border-radius:50%;
display:flex;
align-items:center;
background-color:#3695ED;
`
const RightMost = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin-left:auto;
margin-right:auto;
`
const Desc = styled.div`
margin-left:auto;
margin-right:auto;
color:dark-gray;
font-weight:500;
`

function ServiceMap() {
  return (
    <Wrapper>
    <Container>
        
        <Left1>
            
            <Desc>
            Career Consulting
            </Desc>
        </Left1>
        <Center>
            <Image src='https://media.discordapp.net/attachments/1036195620693749825/1042097359594725476/image.png?width=744&height=607'/>
        </Center>
        <Right1>
        <Desc>
            Career Consulting
            </Desc>
        </Right1>
        
        


    </Container>
    <RightMost>

        
        <Circle1>
        <Desc>
            Career Consulting
            </Desc>
        </Circle1>
        <Circle2>
        <Desc>
            Career Consulting
            </Desc>
        </Circle2>
        </RightMost>
    </Wrapper>
  )
}

export default ServiceMap
