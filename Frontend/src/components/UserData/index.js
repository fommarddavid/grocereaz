// == Import npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import
import FormStyle from '../../styles/FormStyle';
import image from '../../assets/images/V2/pasta-1.png';

// == Composant
const UserData = ({
  firstname,
  lastname,
  email,
}) => (
  <FormStyle>
    <section className="content-part">
      <h2>Personal data</h2>
      <div className="user-data-wrapper">
        <ul className="user-data-list">
          <li className="user-data">
            <em className="user-data-label">Firstname :</em>
            <div className="user-data-value">{firstname}</div>
          </li>
          <li className="user-data">
            <em className="user-data-label">Lastname :</em>
            <div className="user-data-value">{lastname}</div>
          </li>
          <li className="user-data">
            <em className="user-data-label">E-mail :</em>
            <div className="user-data-value">{email}</div>
          </li>
        </ul>
      </div>
    </section>
    <section className="picture-part">
      <div className="image">
        <img
          src={image}
          alt="A delicious plate of pastas."
          className="image-size"
        />
      </div>
    </section>
  </FormStyle>
);


UserData.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

// == Export
export default UserData;
