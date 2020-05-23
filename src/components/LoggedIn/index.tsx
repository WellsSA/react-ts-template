import React from 'react';
import i18n from 'i18n';
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
        <SideMenu title={i18n.t('COMMON.APPLICATION_NAME_KEY')} />
      </LeftSideContainer>
      <RightSideContainer>
        <Header />
        <ChildrenContainer>{children}</ChildrenContainer>
      </RightSideContainer>
    </Container>
  );
};

export default LoggedIn;
