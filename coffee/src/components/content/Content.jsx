import './content.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { followersInfo } from '../../gateway/followersInfo';

const Content = () => {
  const [followLabel, setFollowLabel] = useState('FOLLOW');
  const [followIcon, setFollowIcon] = useState(faPlus);

  const toggleFollow = () => {
    setFollowLabel(followLabel === 'FOLLOW' ? 'unfollow' : 'FOLLOW');
    setFollowIcon(followIcon === faPlus ? faMinus : faPlus);
  };

  return (
    <div className="content">
      <div className="logo"></div>
      <div className="buttonGroup">
        <button className="button">
          <FontAwesomeIcon icon={faComment} />
          <span className="btn__text">MESSAGE</span>
        </button>
        <button className="button" onClick={toggleFollow}>
          <FontAwesomeIcon icon={followIcon} />
          <span className="btn__text">{followLabel}</span>
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
    </div>
  );
};

export default Content;
