import React, { useState } from 'react';
import { Icon, Loader } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ModalStyle from '../../styles/ModalStyle';

const FormModalButton = ({
  label,
  title,
  comment,
  loaderComment,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="form-validation"
        type="submit"
        onClick={toggleModal}
      >{label}
      </button>
      <ModalStyle
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <div className="modal">
          <h2 className="modal-title">
            <Icon
              className="modal-title-icon"
              name="check"
              color="green"
            />
            <span className="modal-title-label">{title}</span>
          </h2>
          <div className="modal-comments">{comment}</div>
        </div>
        {/* <Link to="/">
          <Button
            inverted
            color="green"
            onClick={toggleModal}
          >OK
          </Button>
        </Link> */}
        <Loader
          active
          size="medium"
          inline="centered"
          content={loaderComment}
        />

      </ModalStyle>
    </div>
  );
};

FormModalButton.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  loaderComment: PropTypes.string.isRequired,
};

export default FormModalButton;
