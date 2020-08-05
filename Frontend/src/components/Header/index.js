import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// == Import
import logo from '../../assets/images/logo-grocereaz.png';
import Search from '../../containers/Search';
import HeaderStyled from './HeaderStyled';
import HeaderButton from './HeaderButton';
import HeaderButtonConnected from './HeaderButtonConnected';

// == Composant
const Header = ({
  isConnected,
  connectedFirstname,
  connectedLastname,
  logout,
  closeAllModals,
}) => (
  <HeaderStyled>
    <div className="logo-title">
      <Link to="/">
        <img
          src={logo}
          alt="The logo of Grocereaz : a cherry in the shape of a G letter with a grocery list."
          className="logo-size"
        />
      </Link>
      <h1 className="grocereaz">Grocer'eaz</h1>
    </div>
    <div className="display-search">
      <Search />
    </div>
    <div className="header-buttons">
      <Link to="/">
        <button
          className="home-button"
          type="button"
          onClick={closeAllModals}
        >
          Home
        </button>
      </Link>
      <div className="header-button">
        {!isConnected && <HeaderButton />}
        {isConnected && (
        <HeaderButtonConnected
          firstname={connectedFirstname}
          lastname={connectedLastname}
          logout={logout}
        />
        )}
      </div>
    </div>
  </HeaderStyled>
);
Header.propTypes = {
  connectedFirstname: PropTypes.string.isRequired,
  connectedLastname: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
};
// == Export
export default Header;
