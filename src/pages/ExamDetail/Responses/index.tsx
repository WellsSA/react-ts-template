/* eslint-disable react/jsx-indent */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Collapse } from 'react-collapse';
import { IAnswer } from 'modules/exam/types';
import { List, SkeletonContainer } from './styles';

interface IProps {
  answers: IAnswer[][];
  isLoading: boolean;
}

const Responses: React.FC<IProps> = ({ answers, isLoading }) => {
  const [selectedResponse, setSelectedResponse] = React.useState<number | null>(
    null,
  );

  const handleSelectResponse = (index: number) => {
    if (index === selectedResponse) {
      return setSelectedResponse(null);
    }
    return setSelectedResponse(index);
  };

  return (
    <List>
      {isLoading ? (
        <SkeletonContainer>
          {Array.from(Array(6).keys()).map(() => (
            <Skeleton height={30} />
          ))}
        </SkeletonContainer>
      ) : (
        answers.map((response, index) => (
          <li>
            <button onClick={() => handleSelectResponse(index)} type="button">
              {`Resposta #${index + 1}`}
            </button>
            <Collapse isOpened={selectedResponse === index}>oi</Collapse>
          </li>
        ))
      )}
    </List>
  );
};

export default Responses;
