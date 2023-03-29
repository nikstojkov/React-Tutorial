import React from 'react'
import styled from 'styled-components'

const data = [
  'Web Design',
  'Development',
  'Illustration',
  'Product Design',
  'Social Media'
];

const Section = styled.div`
  height: 75vh;
  background-color: #8ea4f4;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  /* transition: 30 ease-in-out; */
  

  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    color: white;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
      animation: moveText 0.5s ease-out both;
      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex:1;
`;


const Projects = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map(item => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Projects
