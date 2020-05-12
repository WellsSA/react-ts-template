import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img
        src="https://api.adorable.io/avatars/70/abott@adorable.png"
        alt="Avatar"
      />
    </Container>
  );
};

export default Header;
