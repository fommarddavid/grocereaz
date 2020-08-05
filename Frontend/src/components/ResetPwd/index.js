// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

// == Import
import image from '../../assets/images/V2/cherry-b.png';
import FormStyle from '../../styles/FormStyle';
import FormModalButton from '../../containers/FormModal';
import Field from '../Field';
import { validateField } from '../../utils/validations';

// == Composant
const ResetPwd = ({
  passwordValue,
  confirmPasswordValue,
  changeFieldValue,
  resetPassword,
  setPasswordToken,
  passwordToken,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPasswordToken(passwordToken);
    resetPassword();
  };
  const emptyPasswordInput = passwordValue === '';
  const validPassword = passwordValue.length >= 8;
  const emptyConfirmPasswordInput = confirmPasswordValue === '';
  const samePasswordValues = passwordValue === confirmPasswordValue;

  return (
    <FormStyle>
      <section className="content-part">
        <h2>Reset Password</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="password"
              value={passwordValue}
              placeholder="Password"
              changeValue={changeFieldValue}
              type="password"
              validField={validPassword}
              emptyField={emptyPasswordInput}
            />
            <Field
              name="confirmPassword"
              value={confirmPasswordValue}
              placeholder="Confirm password"
              changeValue={changeFieldValue}
              type="password"
              validField={samePasswordValues}
              emptyField={emptyConfirmPasswordInput}
            />
            {emptyPasswordInput && emptyConfirmPasswordInput && (
              <span className="instruction">Please enter your password...</span>
            )}
            {validPassword && emptyConfirmPasswordInput && (
              <span className="instruction">
                Please enter the confirmed password...
              </span>
            )}
            {validPassword
              && !emptyConfirmPasswordInput
              && !samePasswordValues && (
                <span className="instruction">Passwords are not identical</span>
            )}
            {
              validateField('password', passwordValue) && (
              <FormModalButton
                label="Send new password"
                title="Reset Password!"
                comment="The new password will be registrated... Please Sign In"
                loaderComment="Registrating new password..."
              />
              )
          }
          </div>
        </Form>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A delicious avocado toast. Yummy !"
            className="image-size"
          />
        </div>
      </section>
    </FormStyle>
  );
};

ResetPwd.propTypes = {
  passwordValue: PropTypes.string.isRequired,
  confirmPasswordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  setPasswordToken: PropTypes.func.isRequired,
  passwordToken: PropTypes.string.isRequired,
};
// == Export
export default ResetPwd;
