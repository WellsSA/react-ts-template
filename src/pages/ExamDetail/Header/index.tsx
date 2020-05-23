import React from 'react';
import i18n from 'i18n';
import { Container, DescriptionContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>{i18n.t('EXAM_DETAIL.DESCRIPTION_KEY')}</h2>
      </DescriptionContainer>
    </Container>
  );
};

export default Header;
