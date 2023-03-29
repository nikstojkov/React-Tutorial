import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
  background-color: blue;
`;

const Container = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
`;

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  color: white;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: fuchsia;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
      <Links>
        <Logo src="../../Images/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src='../../Images/search.png' />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
