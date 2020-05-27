import React, { useState } from 'react';
// import i18n from 'i18n';
// import { connect } from 'react-redux';
import Input from 'components/Input';
import Button from 'components/Button';
import { Container, Question } from './styles';

interface ISchema {
  name: string;
}

// interface IProps {}

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState([{}]);

  const addQuestion = () => {
    setQuestions(prev => [...prev, {}]);
  };

  // const removeQuestion = index => {
  //   setQuestions(prevState => {
  //     const nextState = [...prevState];
  //     nextState.splice(index, index + 1);
  //     return nextState;
  //   });
  // };

  return (
    <Container>
      {questions.length ? (
        questions.map((question, index) => (
          <Question key={`${index + 1}`} number={`${index + 1}`}>
            {/* <span title="Remove" onClick={() => removeQuestion(index)}>
              X
            </span> */}
            <>
              <Input
                placeholder="Título"
                label="Título"
                name="questionName"
                // inputOnly
              />
            </>
            <div>tipos disponíveis</div>
          </Question>

          //   <Label>Formato da questão</Label>
          //   <div style={{ display: 'flex' }}>
          //     <div
          //       style={{ width: 100, height: 100, backgroundColor: '#000' }}
          //     />
          //   </div>
          //   {JSON.stringify(question)}
          // </div>
        ))
      ) : (
        <></>
      )}
      <Button variant="dashed" onClick={addQuestion}>
        Add Question
      </Button>
    </Container>
  );
};

export default Questions;
// const mapStateToProps = ({ exam: { modalOpen, isLoadingCreate } }) => ({
//   modalOpen,
//   isLoadingCreate,
// });

// export default connect(mapStateToProps, { examHandleModal, examCreateRequest })(
//   ModalExam,
// );
