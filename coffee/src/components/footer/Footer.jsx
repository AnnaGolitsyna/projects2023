import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

library.add(faLocationDot);
library.add(faNewspaper);

const Footer = () => {
  return (
    <div className="footer">
      <div className="location">
        <div className="location__adress">
          <FontAwesomeIcon
            icon={['fas', 'location-dot']}
            className="location__icon"
          />
          <span className="location__label">Round Lake, NY</span>
        </div>
        <a className='location_hover'
          href="https://www.deathwishcoffee.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="location__adress">
            <FontAwesomeIcon
              icon={['fas', 'newspaper']}
              className="location__icon"
            />
            <span className="location__label">deathwishcoffee.com</span>
          </div>
        </a>
      </div>
      <button className="btn__buying">BUY NOW</button>
    </div>
  );
};

export default Footer;
