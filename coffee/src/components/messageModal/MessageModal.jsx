import React from 'react';
import { createPortal } from 'react-dom';
import pirateImage from '../../styles/background/pirate.jpg';
import SocialMediaBar from '../socialMediaBar/SocialMediaBar';
import Button from '../button/Button';
import './messageModal.css';

const modalEl = document.getElementById('modal-root');

const MessageModal = ({ closeModal }) => {
  return createPortal(
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__communication">
          <form className="dilogForm">
            <p className="dilogForm__title">
              Our manager will be happy to read your message
            </p>
            <input className="dilogForm__input" placeholder="your e-mail" />
            <textarea className="dilogForm__input" placeholder="your message" />
            <div className="buttonGroup">

              <Button text="SAVE" className="btn__modal btn_save" />
              <Button
                text="Cancel"
                onClick={closeModal}
                className="btn__modal btn_canceled"
              />
            </div>
          </form>
          <SocialMediaBar />
        </div>
        <img className="modal__img" src={pirateImage} alt="pirate" />
        <button className="btn__close-message" onClick={closeModal}>
          {' '}
          X{' '}
        </button>
      </div>
    </div>,
    modalEl
  );
};

export default MessageModal;
