import React, { useRef, Dispatch, SetStateAction } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import i18n from 'i18n';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

import {
  Container,
  Question,
  QuestionType,
  QuestionTypesContainer,
  RemoveQuestion,
} from './styles';

export interface IQuestion {
  title: string;
  type: string;
  validations?: {
    required: boolean;
  };
}

interface IProps {
  questions?: IQuestion[];
  setQuestions?: Dispatch<SetStateAction<IQuestion[]>>;
}

const DEFAULT_QUESTION = {
  title: '',
  type: 'long_text',
  validations: {
    required: true,
  },
};

const Questions: React.FC<IProps> = ({ questions, setQuestions }) => {
  const questionTypes = useRef([
    {
      title: i18n.t('EXAM.QUESTION.TYPE.DISSERTATION_TYPE'),
      type: 'long_text',
      icon: BsReverseLayoutTextSidebarReverse,
    },
    {
      title: i18n.t('EXAM.QUESTION.TYPE.DISSERTATION_TYPE'),
      type: 'long_text2',
      icon: BsReverseLayoutTextSidebarReverse,
    },
    {
      title: i18n.t('EXAM.QUESTION.TYPE.DISSERTATION_TYPE'),
      type: 'long_text3',
      icon: BsReverseLayoutTextSidebarReverse,
    },
  ]);

  const addQuestion = () => {
    setQuestions(prev => [...prev, DEFAULT_QUESTION]);
  };

  const removeQuestion = (index: number): void => {
    setQuestions(prevState => {
      const nextState = [...prevState];
      nextState.splice(index, 1);
      return nextState;
    });
  };

  const changeQuestionAttributes = (
    index: number,
    callback: (obj: IQuestion) => IQuestion,
  ) => {
    setQuestions(prev => {
      const arr = [...prev];
      arr[index] = callback(arr[index]);
      return arr;
    });
  };

  const changeQuestionTitle = (index: number, value: string): void => {
    changeQuestionAttributes(index, obj => ({ ...obj, title: value }));
  };

  const changeQuestionType = (index: number, value: string): void => {
    changeQuestionAttributes(index, obj => ({ ...obj, type: value }));
  };

  return (
    <Container>
      {questions.length ? (
        questions.map(({ title, type: qType }, index) => (
          <Question key={`${index + 1}`} number={`${index + 1}`}>
            <RemoveQuestion
              title={i18n.t('EXAM.QUESTION.REMOVE_QUESTION')}
              onClick={() => removeQuestion(index)}
            >
              <MdClose />
            </RemoveQuestion>
            <>
              <Input
                placeholder={i18n.t('EXAM.QUESTION.QUESTION_TITLE')}
                label={i18n.t('EXAM.QUESTION.QUESTION_TITLE')}
                name="questionName"
                value={title}
                onChange={e => changeQuestionTitle(index, e.target.value)}
              />
            </>
            <QuestionTypesContainer>
              {questionTypes.current.map(
                ({ title, type, icon: Icon }, typeIndex) => (
                  <QuestionType
                    key={`${typeIndex + 1}`}
                    title={title}
                    onClick={() => changeQuestionType(index, type)}
                    checked={qType === type}
                  >
                    <Icon />
                  </QuestionType>
                ),
              )}
            </QuestionTypesContainer>
          </Question>
        ))
      ) : (
        <></>
      )}
      <Button variant="dashed" onClick={addQuestion}>
        {i18n.t('EXAM.QUESTION.ADD_QUESTION')}
      </Button>
    </Container>
  );
};

export default Questions;
