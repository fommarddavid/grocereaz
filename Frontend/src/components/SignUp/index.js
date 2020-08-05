// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import image from '../../assets/images/V2/avocado-toast-2-r.png';
import FormStyle from '../../styles/FormStyle';
import Field from '../Field';
import { validateSignUp } from '../../utils/validations';
import FormModalButton from '../../containers/FormModal';

// == Composant
const SignUp = ({
  firstnameValue,
  lastnameValue,
  emailValue,
  passwordValue,
  confirmPasswordValue,
  changeFieldValue,
  register,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    register();
  };
  const samePasswordValues = passwordValue === confirmPasswordValue;
  const validationSignUp = validateSignUp(
    firstnameValue,
    lastnameValue,
    emailValue,
    passwordValue,
    confirmPasswordValue,
  );

  return (
    <FormStyle>
      <section className="content-part">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="firstname"
              value={firstnameValue}
              changeValue={changeFieldValue}
              placeholder="First Name"
            />
            <Field
              name="lastname"
              value={lastnameValue}
              changeValue={changeFieldValue}
              placeholder="Last Name"
            />
            <Field
              name="email"
              value={emailValue}
              changeValue={changeFieldValue}
              type="email"
              placeholder="E-mail"
            />
            <Field
              name="password"
              value={passwordValue}
              changeValue={changeFieldValue}
              type="password"
              placeholder="Password"
            />
            <Field
              name="confirmPassword"
              value={confirmPasswordValue}
              changeValue={changeFieldValue}
              type="password"
              placeholder="Confirm password"
            />
            {!samePasswordValues && (
              <p className="instruction">
                The two passwords are not the same...
              </p>
            )}
            {
              validationSignUp && (
                <FormModalButton
                  label="Register"
                  title="REGISTER!"
                  comment="Congratulations, you are now a new member... Please sign in"
                  loaderComment="Creating your account..."
                />
              )
            }
            <div className="links">
              <Link to="/sign-in" className="link">
                Already a member ?
              </Link>
            </div>
          </div>
        </Form>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A delicious avocado toast."
            className="image-size"
          />
        </div>
      </section>
    </FormStyle>
  );
};

SignUp.propTypes = {
  firstnameValue: PropTypes.string.isRequired,
  lastnameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  confirmPasswordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
// == Export
export default SignUp;
