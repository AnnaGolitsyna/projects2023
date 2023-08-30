import React from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import pirateImage from '../../styles/background/pirate.jpg';
import SocialMediaBar from '../socialMediaBar/SocialMediaBar';
import Button from '../button/Button';
import './messageModal.css';

const modalEl = document.getElementById('modal-root');

const MessageModal = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return createPortal(
    <div className="modal__container">
      <div className="modal__content">
        <div className="modal__communication">
            <p className="modal__title">
              Our manager will be happy to read your message
            </p>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="dilogForm"
          >
            <input
              {...register('eMail', { required: 'This field is required' })}
              className="dilogForm__input"
              placeholder="your e-mail"
            />
            <span className="error-message">{errors.eMail?.message}</span>
            <textarea
              {...register('textMessage', {
                required: 'This field is required',
                minLength: {
                  value: 5,
                  message: 'Please write more',
                },
              })}
              className="dilogForm__input"
              placeholder="your message"
            />
            <span className="error-message">{errors.textMessage?.message}</span>
            <div className="buttonGroup">
              <Button text="SABMIT" className="btn__modal btn_save" />
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
