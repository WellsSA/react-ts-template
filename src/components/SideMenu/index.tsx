import React from 'react';
import i18n from 'i18n';
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
    label: i18n.t('DASHBOARD.DASHBOARD_KEY'),
    to: '/dashboard',
  },
  {
    icon: <FaUser />,
    label: i18n.t('PROFILE.PROFILE_KEY'),
    to: '/profile',
  },
  {
    icon: <FaBook />,
    label: i18n.t('EXAM.EXAM_KEY'),
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
          <ListItem key={to} active={path.includes(to) ? 'true' : ''} to={to}>
            {icon}
            <span>{label}</span>
          </ListItem>
        ))}
      </List>
      <LogoutContainer onClick={authenticationLogoutRequest}>
        <FaSignOutAlt />
        <span>{i18n.t('COMMON.LOGOUT_KEY')}</span>
      </LogoutContainer>
    </Container>
  );
};

export default connect(null, { authenticationLogoutRequest })(SideMenu);
