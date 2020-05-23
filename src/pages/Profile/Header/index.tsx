import React from 'react';
import i18n from 'i18n';
import { Container, DescriptionContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>{i18n.t('PROFILE.PROFILE_KEY')}</h2>
        <p>{i18n.t('PROFILE.DESCRIPTION_KEY')}</p>
      </DescriptionContainer>
    </Container>
  );
};

export default Header;
