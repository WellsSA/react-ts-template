import React from 'react';
import Modal from 'react-modal';
import { customStyles } from './styles';

Modal.setAppElement('#root');

interface IProps {
  open: boolean;
  onClose: () => void;
}

const ModalCustom: React.FC<IProps> = ({ open, onClose, children }) => {
  return (
    <div>
      <Modal isOpen={open} onRequestClose={onClose} style={customStyles}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalCustom;
