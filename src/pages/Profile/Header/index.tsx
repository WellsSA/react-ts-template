import React from 'react';
import { Container, DescriptionContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>Profile</h2>
        <p>Edit your data</p>
      </DescriptionContainer>
    </Container>
  );
};

export default Header;
