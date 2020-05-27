import React from 'react';
import Modal from 'pages/Exam/Modal';
import Header from './Header';
import Analytics from './Analytics';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Analytics />
      <Modal />
    </>
  );
};

export default Dashboard;
