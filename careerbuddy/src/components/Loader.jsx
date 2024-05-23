import React from 'react'
import Spinner from 'assets/Careerbuddy_loader.gif'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`

const Loader = () => {
  return (
    <LoadingWrapper>
      <img src={Spinner} alt="Loader" />
    </LoadingWrapper>
  )
}

export default Loader
