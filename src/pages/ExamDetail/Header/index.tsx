import React from 'react';
import { Container, DescriptionContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>Exam Detail</h2>
      </DescriptionContainer>
    </Container>
  );
};

export default Header;
