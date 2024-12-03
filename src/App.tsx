import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';

import { Container, Form, Input } from './components/Container';
import { theme } from './styles/Theme.styled';


const Box = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-items: flex-start;
  gap: 15px;
  padding: 100px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }


@media ${theme.media.tablet}{
  flex-direction: column;
}
`

function App() {

  const [hiddenForm, setHiddenForm] = useState(true)

  function hideForm() {
    setHiddenForm(!hiddenForm)
  }

  return (
    <div className='App'>
      <Box>
        <StyledBtn color={theme.colors.primary} fontSize='20px' btnType={'primary'} active>Hello</StyledBtn>
        <StyledBtn color={theme.colors.secondary} btnType={'outlined'}>Hello</StyledBtn>
        <StyledBtn btnType={'primary'} active>Hello</StyledBtn>
        <StyledBtn btnType={'outlined'}>Hello</StyledBtn>
      </Box>

      <Container>
        <button onClick={()=> hideForm()}>Show Form</button>
        <Form hiddenForm={hiddenForm}>
          <Input type={'text'} placeholder={'Required'} />
          <Input type={'radio'} checked={true} scale />

          <Input type="button" value={'Button'} border='2px solid #000' borderRadius='5px' bgc={'green'} scale />
          <Input type="checkbox" scale />
          <Input type="color" />
          <Input type="date" />
          <Input type="datetime-local" />
          <Input type="email" required />
          <Input type="file" />
          <Input type="hidden" />
          <Input type="image" />
          <Input type="month" />
          <Input type="number" />
          <Input type="password" />
          <Input type="radio" />
          <Input type="range" />
          <Input type="reset" />
          <Input type="search" required />
          <Input type="submit" />
          <Input type="tel" />
          <Input type="text" />
          <Input type="time" />
          <Input type="url" />
          <Input type="week"></Input>
        </Form>
      </Container>

    </div>
  );
}

export default App;
