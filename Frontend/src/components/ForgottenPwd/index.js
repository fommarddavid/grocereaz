// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
// == Import
import image from '../../assets/images/V2/apricots.png';
import FormStyle from '../../styles/FormStyle';
import Field from '../Field';
import FormModalButton from '../../containers/FormModal';
import { validateField } from '../../utils/validations';

// == Composant
const ForgottenPwd = ({
  emailValue,
  changeFieldValue,
  sendResetPassword,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('Forgotten password: Send Reset Link handlesubmit ok');
    sendResetPassword();
  };
  const emptyEmailInput = emailValue === '';

  return (
    <FormStyle>
      <section className="content-part">
        <h2>Forgotten Password</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="email"
              value={emailValue}
              placeholder="E-mail"
              changeValue={changeFieldValue}
              type="email"
            />
            {emptyEmailInput && (
              <p className="instruction">Please enter your email...</p>
            )}
            {validateField('email', emailValue) && (
              <FormModalButton
                label="Send reset password"
                title="FORGOTTEN PASSWORD!"
                comment={`An email will been sent to ${emailValue}`}
                loaderComment="Sending email..."
              />
            )}
          </div>
        </Form>
      </section>
      <section className="picture-part">
        <div className="image">
          <img src={image} alt="Apricots on a table" className="image-size" />
        </div>
      </section>
    </FormStyle>
  );
};

ForgottenPwd.propTypes = {
  emailValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  sendResetPassword: PropTypes.func.isRequired,
};
// == Export
export default ForgottenPwd;
