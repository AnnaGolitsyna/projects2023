import React from 'react';
import { createPortal } from 'react-dom';
import './messageModal.css';

const modalEl = document.getElementById('modal-root');

const MessageModal = () => {
  return createPortal(
    <div className="modal__container">
      <div className='modal__content'> MessageModal</div>
    </div>,
    modalEl
  );
};

export default MessageModal;
