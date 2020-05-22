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
import { Container } from './styles';

interface IProps {
  examGetOneRequest: (id: string) => void;
  examGetResponseRequest: (id: string) => void;
  exam: IExamSelected | null;
  answers: IAnswer[][];
  isLoading: boolean;
}
const ExamDetail: React.FC<IProps> = ({
  examGetOneRequest,
  examGetResponseRequest,
  exam,
  answers,
  isLoading,
}) => {
  const { id } = useParams();

  const fieldsAsObject = React.useMemo(() => {
    return exam?.fields.reduce(
      (acc, { id, title }) => ({ ...acc, [id]: title }),
      {},
    );
  }, [exam]);

  React.useEffect(() => {
    examGetOneRequest(id);
    examGetResponseRequest(id);
  }, [examGetOneRequest, examGetResponseRequest, id]);

  return (
    <>
      <Header />
      <Container>
        <Info isLoading={isLoading} title={exam?.title} url={exam?.url} />
        <ul>
          <li>Responses</li>
          {answers.map((response, index) => (
            <div>
              {`Resposta #${index}`}
              <ul>
                {response.map(({ text, title }) => (
                  <li>
                    <strong>{fieldsAsObject[title]}</strong>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </Container>
    </>
  );
};

const mapStateToProps = ({
  exam: { selected, isLoading, answers },
}: {
  exam: IInitialState;
}) => ({
  exam: selected,
  isLoading,
  answers,
});

export default connect(mapStateToProps, {
  examGetOneRequest,
  examGetResponseRequest,
})(ExamDetail);
