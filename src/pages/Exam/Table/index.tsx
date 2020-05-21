import React from 'react';
import { Link } from 'react-router-dom';
import { IExam } from 'modules/exam/types';
import Button from 'components/Button';
import { format } from 'date-fns';
import { Container, Table as TableStyled, ContainerButton } from './styles';

interface IProps {
  rows: IExam[];
  page: number;
  pageCount: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const Table: React.FC<IProps> = ({
  rows,
  page,
  pageCount,
  onClickNext,
  onClickPrevious,
}) => {
  return (
    <Container>
      <TableStyled>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Data de Criação</td>
            <td>Atualizado em</td>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ created_at, id, title, updated_at }) => (
            <Link key={id} to={`exam/${id}`}>
              <tr>
                <td>{title}</td>
                <td>{format(new Date(created_at), 'dd/MM/yyyy')}</td>
                <td>{format(new Date(updated_at), 'dd/MM/yyyy')}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </TableStyled>
      <ContainerButton>
        <Button disabled={page <= 1} onClick={onClickPrevious}>
          Anterior
        </Button>
        <span>{`${page}/${pageCount}`}</span>
        <Button
          disabled={pageCount <= 1 || page >= pageCount}
          onClick={onClickNext}
        >
          Próxima
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default Table;
