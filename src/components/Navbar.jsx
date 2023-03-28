import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: black;
`

const Container = styled.div`
width: 1400px;
background-color: white;
`

const Navbar = () => {
  return (
    <Section>
      <Container>Navbar</Container>
    </Section>
  )
}

export default Navbar
