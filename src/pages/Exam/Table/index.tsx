import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
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
  onClickDelete: (id: string) => void;
}

const Table: React.FC<IProps> = ({
  rows,
  page,
  pageCount,
  onClickNext,
  onClickPrevious,
  onClickDelete,
}) => {
  return (
    <Container>
      <TableStyled>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Data de Criação</td>
            <td>Atualizado em</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ created_at, id, title, updated_at }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{format(new Date(created_at), 'dd/MM/yyyy')}</td>
              <td>{format(new Date(updated_at), 'dd/MM/yyyy')}</td>
              <td>
                <FaTrash
                  size={16}
                  onClick={() => {
                    onClickDelete(id);
                  }}
                />
                <Link to={`exam/${id}/view`}>
                  <FaEdit size={16} />
                </Link>
              </td>
            </tr>
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
