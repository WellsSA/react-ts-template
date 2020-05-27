import React from 'react';
import i18n from 'i18n';
import Button from 'components/Button';
import { connect } from 'react-redux';
import { examHandleModal } from 'modules/exam/actions';
import { Container, DescriptionContainer, ButtonContainer } from './styles';

interface IProps {
  examHandleModal: (data: { modalOpen: boolean }) => void;
}

const Header: React.FC<IProps> = ({ examHandleModal }) => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>{i18n.t('COMMON.WELCOME_KEY')}</h2>
        <p>{i18n.t('DASHBOARD.DESCRIPTION_KEY')}</p>
      </DescriptionContainer>
      <ButtonContainer>
        <Button onClick={() => examHandleModal({ modalOpen: true })}>
          {i18n.t('COMMON.CREATE_EXAM_KEY')}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default connect(null, { examHandleModal })(Header);
