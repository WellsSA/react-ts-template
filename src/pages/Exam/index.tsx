import React from 'react';
import { connect } from 'react-redux';
import { IExam } from 'modules/exam/types';
import {
  examGetAllRequest,
  examHandleNextPrevious,
} from 'modules/exam/actions';
import Modal from './Modal';
import Header from './Header';
import Table from './Table';
import { Container } from './styles';

interface IProps {
  rows: IExam[];
  page: number;
  page_count: number;
  examGetAllRequest: () => void;
  examHandleNextPrevious: (data: { page: number }) => void;
}

const Exam: React.FC<IProps> = ({
  examGetAllRequest,
  examHandleNextPrevious,
  rows,
  page,
  page_count,
}) => {
  React.useEffect(() => {
    examGetAllRequest();
  }, [examGetAllRequest]);

  return (
    <>
      <Header />
      {rows.length ? (
        <Table
          rows={rows}
          page={page}
          pageCount={page_count}
          onClickNext={() => examHandleNextPrevious({ page: 1 })}
          onClickPrevious={() => examHandleNextPrevious({ page: -1 })}
        />
      ) : (
        <Container>
          <span>Create your first exam</span>
        </Container>
      )}
      <Modal />
    </>
  );
};

const mapStateToProps = ({ exam: { rows, page, page_count } }) => ({
  rows,
  page,
  page_count,
});

export default connect(mapStateToProps, {
  examGetAllRequest,
  examHandleNextPrevious,
})(Exam);
