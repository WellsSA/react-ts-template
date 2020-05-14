import React from 'react';
import { connect } from 'react-redux';
import { IExam } from 'modules/exam/types';
import Header from './Header';
import Table from './Table';
import { Container } from './styles';

interface IProps {
  rows: IExam[];
}

const Exam: React.FC<IProps> = ({ rows }) => {
  return (
    <>
      <Header />
      {rows.length ? (
        <Table rows={rows} />
      ) : (
        <Container>
          <span>Create your first exam</span>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = ({ exam: { rows } }) => ({ rows });

export default connect(mapStateToProps)(Exam);
