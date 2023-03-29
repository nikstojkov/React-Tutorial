import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 85vh;
  background-color: #1338BE;
  scroll-snap-align: center;
`

const Hero = () => {
  return (
    <Section>
    <Navbar/>
    <h1>HERO</h1>
    </Section>
  )
}

export default Hero
