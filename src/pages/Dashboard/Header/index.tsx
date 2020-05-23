import React from 'react';
import i18n from 'i18n';
import Button from 'components/Button';
import { Container, DescriptionContainer, ButtonContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>{i18n.t('COMMON.WELCOME_KEY')}</h2>
        <p>{i18n.t('DASHBOARD.DESCRIPTION_KEY')}</p>
      </DescriptionContainer>
      <ButtonContainer>
        <Button>{i18n.t('COMMON.CREATE_EXAM_KEY')}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
