import React from 'react'
import styled from 'styled-components'
import NewsCard from './NewsCard'
import {useEffect, useState} from 'react'
import axios from 'axios'
import './Pagination.css'

const Wrapper = styled.div`
  // background-color:#1E1E1E;
  // padding:50px 0px;
`
const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;

  color: #002b9a;
`
const Container = styled.div``

function NewsCards() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://www.coastappliances.ca/pages/search-results?q=washing%20machine`,
        )

        setProducts(res)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  return (
    <Container>
      {/* <Title>LATEST NEWS TO STAY UPTO DATE</Title>

      <NewsCard data={products} /> */}
    </Container>
  )
}

export default NewsCards
