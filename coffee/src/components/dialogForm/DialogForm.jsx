import React from 'react';
import Button from '../button/Button';
import './DialogForm.css';

const DialogForm = ({ register, errors, handleSubmit, closeModal }) => {
  return (
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
  );
};

export default DialogForm;
