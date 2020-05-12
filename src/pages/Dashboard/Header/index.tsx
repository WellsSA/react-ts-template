import React from 'react';
import Button from 'components/Button';
import { Container, DescriptionContainer, ButtonContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>Welcome</h2>
        <p>View report based on current exams created</p>
      </DescriptionContainer>
      <ButtonContainer>
        <Button>Create an exam</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
