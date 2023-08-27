import './content.css';
import '../../styles/elements/button.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { followersInfo } from '../../gateway/followersInfo';
import MessageModal from '../messageModal/MessageModal';

const Content = () => {
  const [isOpenModal, setStatusModal] = useState(false);

  const [followState, setFollowState] = useState({
    label: 'FOLLOW',
    icon: faPlus,
  });

  const toggleFollow = () => {
    setFollowState((prevState) => ({
      label: prevState.label === 'FOLLOW' ? 'unfollow' : 'FOLLOW',
      icon: prevState.icon === faPlus ? faMinus : faPlus,
    }));
  };

  const { label, icon } = followState;

  return (
    <div className="content">
      <div className="logo"></div>
      <div className="buttonGroup">
        <button className="button" onClick={() => setStatusModal(true)}>
          <FontAwesomeIcon icon={faComment} />
          <span className="btn__text">MESSAGE</span>
        </button>
        <button className="button" onClick={toggleFollow}>
          <FontAwesomeIcon icon={icon} />
          <span className="btn__text">{label}</span>
        </button>
      </div>

      <div className="infoGroup">
        {followersInfo.map(({ amount, category }) => (
          <div className="categoryInfo" key={category}>
            <div className="categoryInfo__quantity">{amount}K</div>
            <span className="categoryInfo__label">{category}</span>
          </div>
        ))}
      </div>
      {isOpenModal && <MessageModal closeModal={() => setStatusModal(false)} />}
    </div>
  );
};

export default Content;
