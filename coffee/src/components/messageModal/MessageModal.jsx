import React from 'react';
import { createPortal } from 'react-dom';
import './messageModal.css';
import '../../styles/elements/button.css';
import pirateImage from '../../styles/background/pirate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

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
              <button className="button btn_modal btn_save">SAVE</button>
              <button
                className="button btn_modal btn_canceled"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="iconsGroup">
            <a
              href="https://www.instagram.com/deathwishcoffee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon icon_instagram"
              />
            </a>
            <FontAwesomeIcon icon={faYoutube} className="icon icon_youTube" />

            <a
              href="https://www.facebook.com/deathwishcoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="icon icon_facebook"
              />
            </a>
            <a
              href="https://twitter.com/deathwishcoffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon icon_twitter" />
            </a>
          </div>
        </div>
        <img className="modal__img" src={pirateImage} alt="pirate" />
        <button className="btn__close" onClick={closeModal}>
          {' '}
          X{' '}
        </button>
      </div>
    </div>,
    modalEl
  );
};

export default MessageModal;
