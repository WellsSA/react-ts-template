/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { IExam } from 'modules/exam/types';
import {
  examGetAllRequest,
  examHandleNextPrevious,
  examDeleteRequest,
} from 'modules/exam/actions';
import Modal from './Modal';
import Header from './Header';
import Table from './Table';
import { Container, SkeletonContainer } from './styles';

interface IProps {
  rows: IExam[];
  page: number;
  page_count: number;
  isLoading: boolean;
  examGetAllRequest: () => void;
  examHandleNextPrevious: (data: { page: number }) => void;
  examDeleteRequest: (data: { selected: { id: string } }) => void;
}

const Exam: React.FC<IProps> = ({
  examGetAllRequest,
  examHandleNextPrevious,
  examDeleteRequest,
  rows,
  page,
  page_count,
  isLoading,
}) => {
  React.useEffect(() => {
    examGetAllRequest();
  }, [examGetAllRequest]);

  return (
    <>
      <Header />
      {isLoading ? (
        <SkeletonContainer>
          {Array.from(Array(6).keys()).map((_, index) => (
            <Skeleton height={30} key={index} />
          ))}
        </SkeletonContainer>
      ) : rows.length ? (
        <Table
          rows={rows}
          page={page}
          pageCount={page_count}
          onClickNext={() => examHandleNextPrevious({ page: 1 })}
          onClickPrevious={() => examHandleNextPrevious({ page: -1 })}
          onClickDelete={id => {
            examDeleteRequest({ selected: { id } });
          }}
        />
      ) : (
        <Container>
          <span>No exams created</span>
        </Container>
      )}
      <Modal />
    </>
  );
};

const mapStateToProps = ({ exam: { rows, page, page_count, isLoading } }) => ({
  rows,
  page,
  page_count,
  isLoading,
});

export default connect(mapStateToProps, {
  examGetAllRequest,
  examHandleNextPrevious,
  examDeleteRequest,
})(Exam);
