import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import MapContainer from '../mapContainer/MapContainer';


const Footer = () => {
  const [showMap, setShowMap] = useState(false);

  const handleLocationClick = () => {
    setShowMap(true);
  };
  return (
    <div className="footer">
      <div className="location">
        <div className="location__adress" onClick={handleLocationClick}>
          <FontAwesomeIcon icon={faLocationDot} className="location__icon" />
          <span className="location__label">Round Lake, NY</span>
        </div>
        <a
          className="location_hover"
          href="https://www.deathwishcoffee.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="location__adress">
            <FontAwesomeIcon icon={faNewspaper} className="location__icon" />
            <span className="location__label">deathwishcoffee.com</span>
          </div>
        </a>
      </div>
      {showMap && <MapContainer />}
      <button className="btn__buying">BUY NOW</button>
    </div>
  );
};

export default Footer;
