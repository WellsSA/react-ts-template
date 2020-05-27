import styled from 'styled-components';
import palette from 'theme/palette';
import { transparentize } from 'polished';

interface IQuestion {
  number: string;
}

export const Container = styled.div`
  padding-top: 2rem;
`;

export const Label = styled.span`
  color: ${palette.purpleDark};
  font-weight: 600;
  display: block;
  padding-bottom: 0.5rem;
`;

/* content: `${props => props.number || 'x'}`; */
export const Question = styled.div<IQuestion>`
  border: thin solid ${palette.purpleDark};
  background: ${palette.white};
  border-radius: 4px;
  padding: 1.5rem;
  margin: 1rem 0;
  position: relative;
  width: 90%;
  margin-left: 10%;

  &:before {
  content: '${props => props.number || `x`}.';
    position: absolute;
    font-size: 22px;
    top: 0.5rem;
    left: -10%;
    padding: 0.2rem;
    color: ${palette.purpleDark};
  }
`;

export const QuestionTypesContainer = styled.div`
  display: flex;
`;

export const QuestionType = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: ${palette.grayLight};
  margin: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveQuestion = styled.span`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${transparentize(0.4, palette.purpleDark)};

  &:hover {
    color: ${transparentize(0.2, palette.purpleDark)};
  }
`;
