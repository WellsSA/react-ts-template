import React from 'react';
import { connect } from 'react-redux';
import { IUser } from 'modules/authentication/types';
import { Container } from './styles';

interface IProps {
  user: IUser;
}

const Header: React.FC<IProps> = ({ user }) => {
  return (
    <Container>
      <h2>{user?.name}</h2>
      <img
        src="https://api.adorable.io/avatars/70/abott@adorable.png"
        alt="Avatar"
      />
    </Container>
  );
};

const mapStateToProps = ({ authentication: { user } }) => ({
  user: {
    ...user,
    name: user?.name?.slice(0, 20),
  },
});

export default connect(mapStateToProps)(Header);
