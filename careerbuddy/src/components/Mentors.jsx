import axios from 'axios'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {mentorsItems} from 'utils/data'
import Footer from './Footer'
import Mentor from './Mentor'
import Navbar from './Navbar'

// import Service from './Service';
const Container = styled.div`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`
const Title = styled.p`
  color: black;
  font-weight: 700;
  font-size: 60.0775px;
  text-align: center;
`
const Wrapper = styled.div`
  // padding:50px 0px;
`

const SearchContainer = styled.div`
  height: 40px;

  margin: 20px;
  width: 40%;

  display: flex;
  /* margin-right: auto;

  margin-left: auto; */
`
const InputContainer = styled.input`
  border-radius: 10px;
  width: 100%;
  // background-color:white;
  padding: 10px;
  border: 1px solid gray;
`

function Mentors({showLayout = true}) {
  const [mentors, setMentors] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])
  const [arrangeFilter, setArrangeFilter] = useState(0)

  const getMentors = async () => {
    const res = await axios.get('https://careerbuddy-backend.onrender.com/api/user/mentors')
    setMentors(res.data?.data?.users)
  }

  useEffect(() => {
    getMentors()
  }, [])

  useEffect(() => {
    console.log(arrangeFilter)
    if (parseInt(arrangeFilter) === 0) {
      setFiltered(mentors)
    } else if (parseInt(arrangeFilter) === 1) {
      const d = [...mentors]
      d.sort(
        (a, b) =>
          b.reviews.reduce((acc, curr) => acc + curr?.rating, 0) -
          a.reviews.reduce((acc, curr) => acc + curr?.rating, 0),
      )
      setFiltered(d)
    } else if (parseInt(arrangeFilter) === 2) {
      const d = [...mentors]
      d.sort(
        (a, b) =>
          a.reviews.reduce((acc, curr) => acc + curr?.rating, 0) -
          b.reviews.reduce((acc, curr) => acc + curr?.rating, 0),
      )
      setFiltered(d)
    } else if (parseInt(arrangeFilter) === 3) {
      const d = [...mentors]
      d.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
      setFiltered(d)
    } else if (parseInt(arrangeFilter) === 4) {
      const d = [...mentors]
      d.sort((a, b) => {
        if (a.name > b.name) {
          return -1
        }
        if (a.name < b.name) {
          return 1
        }
        return 0
      })
      setFiltered(d)
    } else if (parseInt(arrangeFilter) === 5) {
      const d = [...mentors]
      d.sort((a, b) => a?.skills?.split?.(',')?.length - b?.skills?.split?.(',')?.length)
      setFiltered(d)
    } else if (parseInt(arrangeFilter) === 6) {
      const d = [...mentors]
      d.sort((a, b) => b?.skills?.split?.(',')?.length - a?.skills?.split?.(',')?.length)
      setFiltered(d)
    }
  }, [arrangeFilter, mentors])

  useEffect(() => {
    console.log('tsets')
    if (searchTerm.length === 0) {
      setFiltered(mentors)
      return
    }
    const d = mentors.filter(e => {
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
        <Title>Mentors</Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SearchContainer>
            <InputContainer
              placeholder="Search Courses by entering title or professor"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            ></InputContainer>
          </SearchContainer>
          <div>
            <select
              name="filter"
              id="filter"
              value={arrangeFilter}
              onChange={e => setArrangeFilter(e.target.value)}
              style={{
                borderRadius: '10px',
                width: '100%',
                padding: '10px',
                border: '1px solid gray',
              }}
            >
              <option value={0} disabled>
                Select filter
              </option>
              <option value={1}>Rating - High to Low</option>
              <option value={2}>Rating - Low to High</option>
              <option value={3}>Alphabetical - A to Z</option>
              <option value={4}>Alphabetical - Z to A</option>
              <option value={5}>Skill Count - Descending</option>
              <option value={6}>Skill Count - Ascending</option>
            </select>
          </div>
        </div>
        <Container>
          {filtered.length
            ? filtered.map(item => <Mentor item={item} key={item._id} />)
            : mentors.map(item => <Mentor item={item} key={item._id} />)}
        </Container>
      </Wrapper>
      {showLayout ? <Footer /> : null}
    </>
  )
}

export default Mentors
