import React from 'react';
import Modal from 'react-modal';
import './WindowModal.css';
import clickSound from './assets/click2.mp3';
import { useTheme } from './common/ThemeContext';

Modal.setAppElement('#root');

const WindowModal = ({ isOpen, onClose, children, title }) => {
  const { theme } = useTheme();

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleClose = () => {
    playClickSound();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Window Modal"
      overlayClassName="window-overlay"
      className={`window-content ${theme === 'dark' ? 'dark' : 'light'}`}
    >
      <div className="modal-header">
        <h2 className="modal-title">{title}</h2>
        <button className="modal-close" onClick={handleClose}>×</button>
      </div>

      <div className="modal-body">
        {children}
      </div>
    </Modal>
  );
};

export default WindowModal;