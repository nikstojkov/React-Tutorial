import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 95vh;
  background-color: #b2c1f7;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  /* background-color: green; */
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: lightcyan; */
`;

const Title = styled.h1`
  font-weight: 200;
  color: white;
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #faf8f7;
  border: none;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #faf8f7;
  border: none;
  border-radius: 8px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: fuchsia;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  width: 33%;
  cursor: pointer;
`;

const Right = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: white; */
`;

const TextHeader = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 60px;
  padding:30px;
  transform: translateY(-150px);
`;

const Text = styled.h2`
  color:white;
  font-weight: 250;
  font-size: 30px;
  transform: translateY(-150px);
`;


const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder='Write Your Message' rows={10}/>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <TextHeader>We'd love to hear from you.</TextHeader>
          <Text>Use this contact form to get in touch and we'll get back to you ASAP</Text>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
