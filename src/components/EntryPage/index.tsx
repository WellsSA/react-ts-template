import React from 'react';
import { history } from 'services';
import { connect } from 'react-redux';
import { Container, ContainerForm } from './styles';

interface IProps {
  children: React.ReactNode;
  token: string;
}
const EntryPage: React.FC<IProps> = ({ children, token }) => {
  React.useEffect(() => {
    if (token) {
      history.push('/dashboard');
    }
  }, [token]);

  return (
    <Container>
      <ContainerForm>{children}</ContainerForm>
    </Container>
  );
};

const mapStateToProps = ({ authentication: { token } }) => ({ token });

export default connect(mapStateToProps)(EntryPage);
