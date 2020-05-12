import React from 'react';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';
import {
  Container,
  RightSideContainer,
  LeftSideContainer,
  ChildrenContainer,
} from './styles';

interface IProps {
  children: React.ReactNode;
}

const LoggedIn: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <LeftSideContainer>
        <SideMenu title="Exam Applier" />
      </LeftSideContainer>
      <RightSideContainer>
        <Header />
        <ChildrenContainer>{children}</ChildrenContainer>
      </RightSideContainer>
    </Container>
  );
};

export default LoggedIn;
