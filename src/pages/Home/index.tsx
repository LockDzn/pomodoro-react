import React from 'react'

import { Container } from './styles'

const Home: React.FC = () => {
  document.title = 'Home'

  return (
    <Container>
      <h1>ReactJS Structure</h1>
      <p>React + TypeScript + Styled Components.</p>
    </Container>
  )
}

export default Home
