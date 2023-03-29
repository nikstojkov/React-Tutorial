import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 85vh;
  background-color: #1338BE;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  width: 85%;
  display: flex;
  justify-content: space-between;
  /* background-color: green; */
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;
const Text = styled.div``;
const Description = styled.p``;
const Button = styled.button``;


const Right = styled.div`
  flex: 9;
`;
const Img = styled.img``;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="../../Images/line.png"/>
            <Text></Text>
          </WhatWeDo>
          <Description>We enjoy creaing wonderful and human-centred digital experiences.</Description>
          <Button>Learn more</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="../../Images/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
