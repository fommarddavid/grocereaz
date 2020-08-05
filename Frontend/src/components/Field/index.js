// == Import npm
import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { validateField } from '../../utils/validations';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({
  value,
  changeValue,
  placeholder,
  name,
  type,
}) => {
  const handleChange = (evt) => {
    changeValue(evt.target.name, evt.target.value);
  };

  const emptyField = (value === '');
  const colorIcon = validateField(type, value) ? 'green' : 'red';
  return (
    <FieldStyled>
      <Form.Field>
        <div className="field-input">
          <input
            autoComplete="off"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
          />
          {!emptyField && <Icon name={validateField(type, value) && 'check'} color={colorIcon} />}
          {!emptyField && <Icon name={!validateField(type, value) && 'close'} color={colorIcon} />}
        </div>
        <div className="field-instruction">
          {(!emptyField && !validateField(type, value)) && `Your ${name} is not valid yet...`}
        </div>
      </Form.Field>
    </FieldStyled>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};
Field.defaultProps = {
  value: '',
  type: 'text',
};
// == Export
export default Field;
