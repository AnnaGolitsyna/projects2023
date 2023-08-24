import React from 'react';
import { createPortal } from 'react-dom';
import './messageModal.css';
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
          <form className="dilog">MessageModal</form>
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
