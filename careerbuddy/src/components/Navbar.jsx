import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '6px 20px',
          borderBottom: '2px solid lightgray',
          margin: '10px 0px',
        }}
      >
        <div
          className=""
          style={{
            color: '#012bc3',
          }}
        >
          CareerBuddy
        </div>
        <div className="language_change">
          <div id="google_translate_element"></div>
        </div>
      </div>
      <Nav style={{backgroundColor: '#f9f9f9'}}>
        <Burger />
      </Nav>
    </>
  )
}

export default Navbar
