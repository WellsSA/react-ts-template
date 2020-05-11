import styled from 'styled-components';
import palette from 'theme/palette';

export const Title = styled.h2`
  color: ${palette.purpleDark};
  font-weight: 600;
  font-size: 2rem;
`;

export const Or = styled.p`
  position: relative;
  text-align: center;

  ::before {
    content: '';
    display: block;
    width: 120px;
    height: 1px;
    background: #000;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 5;
  }
  ::after {
    content: '';
    display: block;
    width: 120px;
    height: 1px;
    background: #000;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 5;
  }
`;
