import React from 'react';
import './mapContainer.css';

const MapContainer = () => {
  return (
    <iframe
      title="coffeeShop"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d155833.9740260858!2d-73.88394047273447!3d43.02901426951195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de159b24f4e2b7%3A0x1790e5adfe27a8fc!2sDeath%20Wish%20Coffee!5e0!3m2!1sru!2sua!4v1693305762214!5m2!1sru!2sua"
      width="600"
      height="450"
      style={{ border: '0' }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
   />
  );
};

export default MapContainer;
