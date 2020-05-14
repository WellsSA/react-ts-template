import React from 'react';
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
        <h2>Exam</h2>
        <p>See a list of exam already created</p>
      </DescriptionContainer>
      <ButtonContainer>
        <Button onClick={() => examHandleModal({ modalOpen: true })}>
          Create an exam
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default connect(null, { examHandleModal })(Header);
