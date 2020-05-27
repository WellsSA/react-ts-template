import React, { useRef, useState } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
// import i18n from 'i18n';
// import { connect } from 'react-redux';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import {
  Container,
  Question,
  QuestionType,
  QuestionTypesContainer,
  RemoveQuestion,
} from './styles';

interface ISchema {
  name: string;
}

interface IQuestion {
  title: string;
}

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const questionTypes = useRef([
    {
      title: 'Dissertativa',
      type: 'long_text',
      icon: BsReverseLayoutTextSidebarReverse,
    },
    {
      type: 'long_text',
      title: 'Dissertativa',
      icon: BsReverseLayoutTextSidebarReverse,
    },
    {
      type: 'long_text',
      title: 'Dissertativa',
      icon: BsReverseLayoutTextSidebarReverse,
    },
  ]);

  const addQuestion = () => {
    setQuestions(prev => [...prev, { title: '' }]);
  };

  const removeQuestion = index => {
    setQuestions(prevState => {
      const nextState = [...prevState];
      nextState.splice(index, 1);
      return nextState;
    });
  };

  const changeQuestionTitle = (value, index) => {
    setQuestions(prev => {
      const arr = [...prev];
      arr[index] = {
        ...arr[index],
        title: value,
      };
      return arr;
    });
  };

  return (
    <Container>
      {questions.length ? (
        questions.map(({ title }, index) => (
          <Question key={`${index + 1}`} number={`${index + 1}`}>
            <RemoveQuestion
              title="Remove"
              onClick={() => removeQuestion(index)}
            >
              X
            </RemoveQuestion>
            <>
              <Input
                placeholder="Título"
                label="Título"
                name="questionName"
                value={title}
                onChange={e => changeQuestionTitle(e.target.value, index)}
                // inputOnly
              />
            </>
            <QuestionTypesContainer>
              {questionTypes.current.map(({ title, icon: Icon }, index) => (
                <QuestionType key={`${index + 1}`} title={title}>
                  <Icon />
                </QuestionType>
              ))}
            </QuestionTypesContainer>
          </Question>
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
