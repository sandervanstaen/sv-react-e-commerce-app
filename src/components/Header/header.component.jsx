import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
