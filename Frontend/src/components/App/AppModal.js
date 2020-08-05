import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ModalStyle from '../../styles/ModalStyle';

const AppModal = ({
  modalStatus,
  addToListStatus,
  setAddToListStatus,
  addToFavoriteStatus,
  setAddToFavoriteStatus,
  removeFromFavoriteStatus,
  setRemoveFromFavoriteStatus,
  errorStatus,
  setErrorStatus,
  closeAllModals,
  icon,
  title,
  comment,
  color,
}) => {
  const toggleModal = () => {
    if (addToListStatus) {
      setAddToListStatus();
    }
    else if (addToFavoriteStatus) {
      setAddToFavoriteStatus();
    }
    else if (removeFromFavoriteStatus) {
      setRemoveFromFavoriteStatus();
    }
    else if (errorStatus) {
      setErrorStatus();
    }
    closeAllModals();
  };

  return (
    <div>
      <ModalStyle
        isOpen={modalStatus}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <div className="modal">
          <h2 className="modal-title">
            <Icon
              className="modal-title-icon"
              name={icon}
              color={color}
            />
            <span className="modal-title-label">{title}</span>
          </h2>
          <div className="modal-comments">{comment}</div>
        </div>

        <Link to="/">
          <Button color={color} onClick={toggleModal} inverted>
            <Icon name="checkmark" /> {(addToListStatus || addToFavoriteStatus || removeFromFavoriteStatus) ? 'Exploring the home page' : 'Got it!' }
          </Button>
        </Link>
        {addToListStatus && (
          <Link to="/grocery-lists">
            <Button color={color} onClick={toggleModal} inverted>
              <Icon name="checkmark" /> My grocery lists
            </Button>
          </Link>
        )}
        {(addToFavoriteStatus || removeFromFavoriteStatus) && (
          <Link to="/favorite-recipes">
            <Button color={color} onClick={toggleModal} inverted>
              <Icon name="checkmark" /> My favorite recipes
            </Button>
          </Link>
        )}
      </ModalStyle>
    </div>
  );
};

AppModal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  addToListStatus: PropTypes.bool.isRequired,
  setAddToListStatus: PropTypes.func.isRequired,
  addToFavoriteStatus: PropTypes.bool.isRequired,
  setAddToFavoriteStatus: PropTypes.func.isRequired,
  removeFromFavoriteStatus: PropTypes.bool.isRequired,
  setRemoveFromFavoriteStatus: PropTypes.func.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  setErrorStatus: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default AppModal;
