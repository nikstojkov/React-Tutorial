import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: black;
`;

const Container = styled.div`
width: 1400px;
background-color: rebeccapurple;
`;

const Links = styled.div``;
const Logo = styled.img ``;
const List = styled.ul``;
const ListItem = styled.li``;
const Button = styled.button``;
const Icons = styled.div``;
const Icon = styled.img``;



const Navbar = () => {
  return (
    <Section>
      <Container>
      <Links></Links>
      <Logo></Logo>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      <Icons>
        <Icon></Icon>
        <Button>Hire me now</Button>
      </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
