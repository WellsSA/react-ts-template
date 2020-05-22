import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { examGetOneRequest } from 'modules/exam/actions';
import { IExamSelected, IInitialState } from 'modules/exam/types';
import Header from './Header';
import Info from './Info';
import { Container } from './styles';

interface IProps {
  examGetOneRequest: (id: string) => void;
  exam: IExamSelected | null;
  isLoading: boolean;
}
const ExamDetail: React.FC<IProps> = ({
  examGetOneRequest,
  exam,
  isLoading,
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
  }, [examGetOneRequest, id]);

  return (
    <>
      <Header />
      <Container>
        <Info isLoading={isLoading} title={exam?.title} url={exam?.url} />
      </Container>
    </>
  );
};

const mapStateToProps = ({
  exam: { selected, isLoading },
}: {
  exam: IInitialState;
}) => ({
  exam: selected,
  isLoading,
});

export default connect(mapStateToProps, { examGetOneRequest })(ExamDetail);
