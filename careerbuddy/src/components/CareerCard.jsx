import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {GoPrimitiveDot} from 'react-icons/go'
import data from 'utils/careerpath.json'
import {mobile} from 'responsive'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import {autoComplete, keywords} from 'utils/data'
import Autocomplete from 'react-autocomplete'
import ReactPaginate from 'react-paginate'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Container = styled.div`
  // height: 280px;
  width: 400px;
  // margin: 20px;
  border-radius: 14px;
  box-shadow: 3px 3px 10px lightgray;
  display: flex;
  flex-direction: column;

  padding-bottom: 20px;
  justify-content: space-between;
  ${mobile({margin: '0px 20px'})}
`

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  padding: 10px;
  line-height: 33px;
  /* identical to box height */
  align-self: flex-start;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Text = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  padding: 0px 10px;
  line-height: 26px;
  display: flex;
  color: #002b9a;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  align-self: flex-start;
`
const Points = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  align-self: flex-start;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Button = styled.button`
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border-radius: 10px;
  width: 90%;
  border: none;
  height: 30px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  //   margin: 20px;
  bottom: 0;
  //   margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
`
const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  // width: 70%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
`
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FlexContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

function CareerCard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    if (searchTerm.length === 0) {
      setFiltered(data.career)
      return
    }
    const d = data.career.filter(e => {
      return (
        e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.about.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.skills.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    setFiltered(d)
  }, [searchTerm])

  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage
  const currentItems = (filtered.length ? filtered : data.career).slice(itemOffset, endOffset)
  const pageCount = Math.ceil((filtered.length ? filtered : data.career).length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset =
      (event.selected * itemsPerPage) % (filtered.length ? filtered : data.career).length
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
    setItemOffset(newOffset)
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="">
          <Autocomplete
            className="form-control"
            getItemValue={item => item.label}
            items={autoComplete}
            renderItem={(item, isHighlighted) => (
              <div style={{background: isHighlighted ? 'lightgray' : 'white'}}>{item.label}</div>
            )}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onSelect={val => setSearchTerm(val)}
            shouldItemRender={(item, value) => {
              console.log(item, value)
              return item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
            }}
            wrapperStyle={{
              position: 'relative',
              display: 'block',
              marginTop: '20px',
              borderRadius: '10px',
            }}
            inputProps={{
              className: 'form-control',
              placeholder: 'Search Career by entering title or skills',
              style: {
                height: '50px',
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid gray',
                margin: '20px auto',
                width: '80vw',
              },
            }}
          />
        </div>

        <FlexContainer>
          {currentItems?.map(c => (
            <Container>
              <InnerContainer>
                <Title>{c.title}</Title>

                <Text>
                  Avg Salary: <p style={{padding: '0px 20px', color: 'gray'}}>{c.avgsalary}</p>
                </Text>
                <Text>Pre Requisites:</Text>
                <Points>
                  <ul>
                    <li>{c.prerequesite1}</li>
                    <li>{c.prerequesite2}</li>
                  </ul>
                </Points>
              </InnerContainer>

              <Button>
                <Link to={`/careers/${c.id}`} style={{textDecoration: 'none', color: 'white'}}>
                  View Career Path
                </Link>{' '}
              </Button>
            </Container>
          ))}
        </FlexContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 20,
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
          }}
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel={<BsChevronRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<BsChevronLeft />}
            renderOnZeroPageCount={null}
            activeClassName={'item active '}
            breakClassName={'item break-me '}
            containerClassName={'pagination'}
            disabledClassName={'disabled-page'}
            marginPagesDisplayed={2}
            nextClassName={'item next '}
            // nextLabel={<ArrowForwardIosIcon style={{fontSize: 18, width: 150}} />}
            pageClassName={'item pagination-page '}
            previousClassName={'item previous'}
            // previousLabel={<ArrowBackIosIcon style={{fontSize: 18, width: 150}} />}
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}

export default CareerCard
