import styled from "styled-components"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

// TODO: add background image into container from ./images

const Container = styled.div`
  color: white;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display:none;
  }
`;

function App() {

  return (
    <Container>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </Container>
  )
}

export default App
