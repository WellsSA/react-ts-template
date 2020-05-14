import React from 'react';
import { IExam } from 'modules/exam/types';
import Button from 'components/Button';
import { format } from 'date-fns';
import { Container, Table as TableStyled, ContainerButton } from './styles';

interface IProps {
  rows: IExam[];
}

const Table: React.FC<IProps> = ({ rows }) => {
  return (
    <Container>
      <TableStyled>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Quantidade de questões</td>
            <td>Data de expiração</td>
            <td>Data de Criação</td>
            <td>Atualizado em</td>
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({ created_at, expire_at, id, name, questions, updated_at }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{questions.length}</td>
                <td>{format(expire_at, 'dd/MM/yyyy')}</td>
                <td>{format(created_at, 'dd/MM/yyyy')}</td>
                <td>{format(updated_at, 'dd/MM/yyyy')}</td>
              </tr>
            ),
          )}
        </tbody>
      </TableStyled>
      <ContainerButton>
        <Button>Anterior</Button>
        <span>1/1</span>
        <Button>Próxima</Button>
      </ContainerButton>
    </Container>
  );
};

export default Table;
