/* eslint-disable react/jsx-indent */
import React from 'react';
import i18n from 'i18n';
import Skeleton from 'react-loading-skeleton';
import { IAnswer } from 'modules/exam/types';
import { List, SkeletonContainer, CollapseContainer, Collapse } from './styles';

interface IProps {
  answers: IAnswer[][];
  isLoading: boolean;
  fieldsName: Record<string, string>;
}

const Responses: React.FC<IProps> = ({ answers, isLoading, fieldsName }) => {
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
          <li key={`${index + 1}`}>
            <button onClick={() => handleSelectResponse(index)} type="button">
              {`${i18n.t('EXAM_DETAIL.ANSWER_KEY')} #${index + 1}`}
            </button>
            <Collapse isOpened={selectedResponse === index}>
              <CollapseContainer>
                {response?.map(({ text, title }, i) => (
                  <p key={fieldsName[title] || i}>
                    <strong>{fieldsName[title] || ''}</strong>
                    {text}
                  </p>
                ))}
              </CollapseContainer>
            </Collapse>
          </li>
        ))
      )}
    </List>
  );
};

export default Responses;
