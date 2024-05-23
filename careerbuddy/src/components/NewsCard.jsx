import React from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import {useState} from 'react'
import {useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Button, CardGroup} from 'react-bootstrap'
import './Pagination.css'

const OuterContainer = styled.div``
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const NewsCard = images => {
  const {data} = images

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 6

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <Wrapper>
        {currentItems.map(image => {
          return (
            <>
              <Container className="p-4" style={{width: '400px'}}>
                <CardGroup>
                  <Card
                    style={{width: '350px', boxShadow: '2px 2px 2px lightgray', height: '560px'}}
                  >
                    <Card.Body>
                      <Card.Img src={image.urlToImage} />
                      <Card.Title>{image.title}</Card.Title>
                      <Card.Text>{image.description}</Card.Text>
                      <Button variant="primary" style={{borderRadius: '0px', border: '0px'}}>
                        {' '}
                        <a href={image.url} style={{textDecoration: 'none'}}>
                          read more
                        </a>
                      </Button>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Container>
            </>
          )
        })}
      </Wrapper>
      <ReactPaginate
        breakLabel={'...'}
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        // pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination'}
        pageLinkClassName={'page-num'}
        nextLinkClassName={'page-num'}
        activeClassName={'active'}
        previousLinkClassName={'page-num'}
      />
    </>
  )
}

export default NewsCard
