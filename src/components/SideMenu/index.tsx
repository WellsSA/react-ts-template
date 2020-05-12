import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { authenticationLogoutRequest } from 'modules/authentication/actions';
import { FaChartBar, FaUser, FaBook, FaSignOutAlt } from 'react-icons/fa';
import { Container, Title, List, ListItem, LogoutContainer } from './styles';

interface IProps {
  title: string;
  authenticationLogoutRequest: () => void;
}

type Sections = '/dashboard' | '/profile' | '/exam';

interface IMenuItems {
  icon: React.ReactNode;
  label: string;
  to: Sections;
}

const menuItems: IMenuItems[] = [
  {
    icon: <FaChartBar />,
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    icon: <FaUser />,
    label: 'Profile',
    to: '/profile',
  },
  {
    icon: <FaBook />,
    label: 'Exam',
    to: '/exam',
  },
];

const SideMenu: React.FC<IProps> = ({ title, authenticationLogoutRequest }) => {
  const { path } = useRouteMatch();
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {menuItems.map(({ label, icon, to }) => (
          <ListItem key={to} active={path === to} to={to}>
            {icon}
            <span>{label}</span>
          </ListItem>
        ))}
      </List>
      <LogoutContainer onClick={authenticationLogoutRequest}>
        <FaSignOutAlt />
        <span>Logout</span>
      </LogoutContainer>
    </Container>
  );
};

export default connect(null, { authenticationLogoutRequest })(SideMenu);
