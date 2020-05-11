import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const LoggedIn: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <h1>Logged In</h1>
      {children}
    </div>
  );
};

export default LoggedIn;
