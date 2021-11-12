import React from 'react';

import { NavLink, Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <i className="fas fa-stream logo"></i>
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      <Link to="/signin" className="option">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
