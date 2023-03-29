import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 60vh;
  color: blue;
  background-color: #b2c1f7;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Left = styled.div`
  flex:1;
  display: flex;
`;

const Right = styled.div`
  flex:1;
  display: flex;
`;


const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>Left</Left>
        <Right>Right</Right>
      </Container>
    </Section>
  )
}

export default Contact
