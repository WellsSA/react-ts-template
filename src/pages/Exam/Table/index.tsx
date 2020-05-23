import React from 'react';
import i18n from 'i18n';
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
            <td>{i18n.t('COMMON.NAME_KEY')}</td>
            <td>{i18n.t('COMMON.CREATED_AT_KEY')}</td>
            <td>{i18n.t('COMMON.UPDATED_AT_KEY')}</td>
            <td>{i18n.t('COMMON.ACTIONS_KEY')}</td>
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
          {i18n.t('COMMON.BACK_KEY')}
        </Button>
        <span>{`${page}/${pageCount}`}</span>
        <Button
          disabled={pageCount <= 1 || page >= pageCount}
          onClick={onClickNext}
        >
          {i18n.t('COMMON.NEXT_KEY')}
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default Table;
