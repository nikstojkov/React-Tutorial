import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 85vh;
  background-color: rebeccapurple;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 85%;
  display: flex;
  justify-content: space-between;
  /* background-color: green; */
`;

const Left = styled.div`
  flex: 1;
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

const Text = styled.h2`
  color: white;
`;
const Description = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: fuchsia;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}
        </Left>
        <Right>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="../../Images/line.png"/>
            <Text>What We Do</Text>
          </WhatWeDo>
          <Description>We enjoy creaing wonderful and human-centred digital experiences.</Description>
          <Button>Learn more</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
