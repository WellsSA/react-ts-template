import React from 'react';
import i18n from 'i18n';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Modal from 'components/Modal';
import Input from 'components/Input';
import Button from 'components/Button';
import { examHandleModal, examCreateRequest } from 'modules/exam/actions';
import validationSchema from './validationSchema';
import { Container, ButtonsContainer, Loading } from './styles';

interface ISchema {
  name: string;
}

interface IProps {
  modalOpen: boolean;
  examHandleModal: (data: { modalOpen: boolean }) => void;
  examCreateRequest: (data: ISchema) => void;
  isLoadingCreate: boolean;
}

const initialValues = {
  name: '',
};

const ModalExam: React.FC<IProps> = ({
  modalOpen,
  isLoadingCreate,
  examHandleModal,
  examCreateRequest,
}) => {
  return (
    <Modal
      open={modalOpen}
      onClose={() => examHandleModal({ modalOpen: false })}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={examCreateRequest}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Container>
            <Input
              placeholder={i18n.t('COMMON.EXAM_NAME_KEY')}
              label={i18n.t('COMMON.EXAM_NAME_KEY')}
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
            <ButtonsContainer>
              <Button onClick={() => examHandleModal({ modalOpen: false })}>
                {i18n.t('COMMON.BACK_KEY')}
              </Button>
              <Button onClick={() => handleSubmit()}>
                {isLoadingCreate ? (
                  <Loading type="spin" />
                ) : (
                  i18n.t('COMMON.SAVE_KEY')
                )}
              </Button>
            </ButtonsContainer>
          </Container>
        )}
      </Formik>
    </Modal>
  );
};

const mapStateToProps = ({ exam: { modalOpen, isLoadingCreate } }) => ({
  modalOpen,
  isLoadingCreate,
});

export default connect(mapStateToProps, { examHandleModal, examCreateRequest })(
  ModalExam,
);
