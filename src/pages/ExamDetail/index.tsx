import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  examGetOneRequest,
  examGetResponseRequest,
} from 'modules/exam/actions';
import { IExamSelected, IInitialState, IAnswer } from 'modules/exam/types';
import Header from './Header';
import Info from './Info';
import Responses from './Responses';
import { Container } from './styles';

interface IProps {
  examGetOneRequest: (id: string) => void;
  examGetResponseRequest: (id: string) => void;
  exam: IExamSelected | null;
  answers: IAnswer[][];
  isLoading: boolean;
  isLoadingResponse: boolean;
}
const ExamDetail: React.FC<IProps> = ({
  examGetOneRequest,
  examGetResponseRequest,
  exam,
  answers,
  isLoading,
  isLoadingResponse,
}) => {
  const { id } = useParams();

  // const fieldsAsObject = React.useMemo(() => {
  //   return exam?.fields.reduce(
  //     (acc, { id, title }) => ({ ...acc, [id]: title }),
  //     {},
  //   );
  // }, [exam]);

  React.useEffect(() => {
    examGetOneRequest(id);
    examGetResponseRequest(id);
  }, [examGetOneRequest, examGetResponseRequest, id]);

  return (
    <>
      <Header />
      <Container>
        <Info isLoading={isLoading} title={exam?.title} url={exam?.url} />
        <Responses answers={answers} isLoading={isLoadingResponse} />
      </Container>
    </>
  );
};

const mapStateToProps = ({
  exam: { selected, isLoading, answers, isLoadingResponse },
}: {
  exam: IInitialState;
}) => ({
  exam: selected,
  isLoading,
  isLoadingResponse,
  answers,
});

export default connect(mapStateToProps, {
  examGetOneRequest,
  examGetResponseRequest,
})(ExamDetail);
