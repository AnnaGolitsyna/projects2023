import './content.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus);
library.add(faComment);

const Content = () => {
  return (
    <div className="content">

      <div className="buttonGroup">
        <button className="button btn__message">
          <FontAwesomeIcon icon={['far', 'comment']} />
          <span className="btn__text">MESSAGE</span>
        </button>
        <button className="button btn__follow">
          <FontAwesomeIcon icon={['fas', 'plus']} />
          <span className="btn__text">FOLLOW</span>
        </button>
      </div>

      <div className="infoGroup">
        <div className="categoryInfo">
          <div className="categoryInfo__quantity">38.9K</div>
          <span className="categoryInfo__label">Followers</span>
        </div>
        <div className="categoryInfo">
          <div className="categoryInfo__quantity">4.948</div>
          <span className="categoryInfo__label">Following</span>
        </div>
        <div className="categoryInfo">
          <div className="categoryInfo__quantity">12.7K</div>
          <span className="categoryInfo__label">Likes</span>
        </div>
      </div>
      
    </div>
  );
}

export default Content
