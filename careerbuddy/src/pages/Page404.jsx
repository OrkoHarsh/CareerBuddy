import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Headline = styled.div`
  font-size: 15rem;
  font-weight: 100;
`
const Content = styled.div`
  font-weight: 300;
  margin-bottom: 2%;
`

const Page404 = () => {
  return (
    <Container>
      <Headline>404</Headline>
      <Content>This Page does not exist or is unavailable!</Content>
      <Link
        to="/"
        style={{
          padding: '1% 3%',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#3751ff',
          boxShadow: '0px 0px 10px 0px rgba(186, 186, 186, 1)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        Go Back to Home Page
      </Link>
    </Container>
  )
}

export default Page404
