import React from 'react';
import { createPortal } from 'react-dom';
import './messageModal.css';
import '../../styles/elements/button.css';
import pirateImage from '../../styles/background/pirate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTelegram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const modalEl = document.getElementById('modal-root');

const MessageModal = () => {
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
              <button className="button btn_modal btn_save">SAVE</button>
              <button className="button btn_modal btn_canceled">
                Canceled
              </button>
            </div>
          </form>
          <div className="iconsGroup">
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon icon_instagram"
            />
            <FontAwesomeIcon icon={faTelegram} className="icon icon_telegram" />
            <FontAwesomeIcon icon={faFacebook} className="icon icon_facebook" />
            <FontAwesomeIcon icon={faTwitter} className="icon icon_twitter" />
          </div>
        </div>
        <img className="modal__img" src={pirateImage} alt="pirate" />
        <button className="btn__close"> X </button>
      </div>
    </div>,
    modalEl
  );
};

export default MessageModal;
