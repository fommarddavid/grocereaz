import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const HeaderButtonConnected = ({
  firstname,
  lastname,
  logout,
}) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    console.log('HeaderButtonConnected handleClick: ok');
    logout();
    sessionStorage.clear();
    window.location.href = process.env.URL_FRONT;
  };

  return (
    <div className="dropdown">
      <Dropdown text={`${firstname} ${lastname}`}>
        <Dropdown.Menu>
          <div className="dropdown-option">
            <Link to="/">
              <Dropdown.Item text="Sign out" onClick={handleClick} />
            </Link>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

HeaderButtonConnected.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default HeaderButtonConnected;
