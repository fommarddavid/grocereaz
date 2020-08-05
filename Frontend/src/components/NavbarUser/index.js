// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavbarUserStyled from './NavbarUserStyled';

// == Composant
const NavbarUser = ({
  isConnected,
  closeAllModals,
  eraseIngredientsList,
}) => (
  <NavbarUserStyled
    className={classNames({
      'user--connected': isConnected,
    })}
  >
    <div className="nav-user-links">
      <Link
        to="/grocery-lists"
        className="grocery-lists-link"
        onClick={eraseIngredientsList}
      >
        Grocery lists
      </Link>
      <Link
        to="/favorite-recipes"
        onClick={closeAllModals}
      >Favorite recipes
      </Link>
      <Link
        to="/user-data"
      >Personal data
      </Link>
    </div>
  </NavbarUserStyled>
);


NavbarUser.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  eraseIngredientsList: PropTypes.func.isRequired,
};

// == Export
export default NavbarUser;
