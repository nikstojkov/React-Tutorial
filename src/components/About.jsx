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
  width: 120px;
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

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}
        </Left>
        <Right>
          <Title>Think outside the box.</Title>
          <WhatWeDo>
            <Line src="../../Images/line.png"/>
            <Text>Who I am.</Text>
          </WhatWeDo>
          <Description>A recent Web Development bootcamp graduate,
           looking to create tools that people can use,
           connect with the wder world of tech,
           keep learning</Description>
          <Button>See my projects</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default About
