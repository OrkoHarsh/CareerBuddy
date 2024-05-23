import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css'
import {mobile} from '../responsive'
// import styled from 'styled-components';
const responsive = {
  0: {items: 1},
  568: {items: 2},
  1024: {items: 3},
}

const Container = styled.div`
  // margin: 2%;
  /* width: 90%; */
  width: 100%;
  hidden: overflow;
  border-radius: 14px;
  height: 70%;
  margin-left: auto;
  margin-right: auto;
  background-color: #f3f7ff;
  ${mobile({marginTop: '-52px'})}
`
const Image = styled.img`
  height: 70%;
  width: 80%;
  border-radius: 20px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  ${mobile({height: '100%'})}
`
function NewSliders() {
  return (
    <Container>
      <AliceCarousel
        autoPlay
        disableSlideInfo={false}
        controlsStrategy="alternate"
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={4000}
        animationType="slideleft"
        infinite
        mouseTracking={true}
        disableDotsControls={false}
        ArrowLeft={true}
        ArrowRight={true}
        disableButtonsControls
      >
        <Image src="https://media.discordapp.net/attachments/1042114358228025505/1044315498709516479/image.png?width=1440&height=516" />
        <Image
          src="https://media.discordapp.net/attachments/891025496601661504/1044677527962136576/image.png?width=1440&height=538"
          style={{border: 'none'}}
        />

        <Image src="https://media.discordapp.net/attachments/891025496601661504/1044677578729988136/image.png?width=1440&height=467" />
      </AliceCarousel>
    </Container>
  )
}

export default NewSliders
