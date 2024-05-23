import axios from 'axios'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
// import {mentorsItems} from 'utils/data'
import Footer from './Footer'
import Student from './Student'
import Navbar from './Navbar'
import {mentorsItems} from 'utils/data'
import MentorPage from 'pages/MentorPage'

// import Service from './Service';
const Container = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const Title = styled.p`
  color: black;
  font-weight: 700;
  font-size: 60.0775px;
  text-align: center;
  font-family: normal;
`
const Wrapper = styled.div`
  // padding:50px 0px;
`
const SearchContainer = styled.div`
  height: 40px;

  margin: 20px;
  width: 40%;

  display: flex;
  margin-right: auto;

  margin-left: auto;
`
const InputContainer = styled.input`
  border-radius: 10px;
  width: 100%;
  // background-color:white;
  padding: 10px;
  border: 1px solid gray;
`

function Students({showLayout = true}) {
  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])

  const getStudents = async () => {
    const res = await axios.get('https://careerbuddy-backend.onrender.com/api/user/students')
    setStudents(res.data?.data?.users)
  }

  useEffect(() => {
    getStudents()
  }, [])
  useEffect(() => {
    console.log('tsets')
    if (searchTerm.length === 0) {
      setFiltered(students)
      return
    }
    const d = students.filter(e => {
      return (
        e.name?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        e.title?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        e.skills
          ?.join(' ')
          ?.toLowerCase()
          ?.includes(searchTerm.toLowerCase())
      )
    })
    setFiltered(d)
  }, [searchTerm])

  return (
    <>
      {showLayout ? <Navbar /> : null}

      <Wrapper>
        {/* <Title>Students</Title> */}
        <SearchContainer>
          <InputContainer
            placeholder="Search by name"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          ></InputContainer>
        </SearchContainer>
        <Container>
          {filtered.length
            ? filtered.map(item => <Student item={item} key={item._id} />)
            : students.map(item => <Student item={item} key={item._id} />)}
        </Container>
      </Wrapper>
      {showLayout ? <Footer /> : null}
    </>
  )
}

export default Students
