import React from 'react';
import i18n from 'i18n';
import { Container } from './styles';

const LazyLoading: React.FC = () => {
  return (
    <Container>
      <p>
        {i18n.t('COMMON.LOADING_KEY')}
        ...
      </p>
    </Container>
  );
};

export default LazyLoading;
