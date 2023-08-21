import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <span className="priceTag">$19.99</span>
      <h4 className="companyName">DEATH WISH COFFEE</h4>
      <h6 className="companySlogan">World's strongest coffee</h6>
    </div>
  );
}

export default Header