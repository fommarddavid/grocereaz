// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == Import
import FormStyle from '../../styles/FormStyle';
import image from '../../assets/images/V2/cherry-b.png';
import Field from '../Field';
import FormModalButton from '../../containers/FormModal';
import { validateSignIn } from '../../utils/validations';

// == Composant
const SignIn = ({
  emailValue,
  passwordValue,
  changeFieldValue,
  handleSignIn,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignIn();
  };

  return (
    <FormStyle>
      <section className="content-part">
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
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
          </div>
          {validateSignIn(emailValue, passwordValue) && (
            <FormModalButton
              label="Submit"
              title="CONNEXION!"
              comment="Here are your shopping lists"
              loaderComment="Connecting..."
            />
          )}
          <div className="links">
            <Link to="/forgotten-pwd" className="link">
              Forgot password ?
            </Link>
            <Link to="/sign-up" className="link">
              {' '}
              Not a member yet ?
            </Link>
          </div>
        </Form>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A hand holding cherries"
            className="image-size"
          />
        </div>
      </section>
    </FormStyle>
  );
};

SignIn.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
