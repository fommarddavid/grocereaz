// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react';
// == Import
import image from '../../assets/images/cherry.png';
import FormStyle from '../../styles/FormStyle';
import Field from '../Field';

// == Composant
const Contact = ({
  firstname,
  lastname,
  email,
  object,
  changeContactField,
  message,
  sendMessage,
}) => {
  // may be usefull for field autocompletion
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  console.log(userData);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
    sendMessage();
  };

  const handleChange = (evt) => {
    console.log(evt.target.value);
    // changeContactField(evt.target.name, evt.target.value);
  };
  return (
    <FormStyle>
      <section className="content-part">
        <h2>Contact</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="firstname"
              value={firstname}
              changeValue={changeContactField}
              placeholder="Firstname"
              type="text"
              validField
              emptyField
            />
            <Field
              value={lastname}
              changeValue={changeContactField}
              placeholder="Lastname"
              name="lastname"
              type="text"
              validField
              emptyField
            />
            <Field
              value={email}
              changeValue={changeContactField}
              placeholder="Email"
              name="email"
              type="email"
              validField
              emptyField
            />
            <Field
              value={object}
              changeValue={changeContactField}
              placeholder="Object"
              name="object"
              type="text"
              validField
              emptyField
            />
            <div className="form-text-area">
              <TextArea
                value={message}
                onChange={changeContactField}
                name="message"
                placeholder="Your message..."
                rows="3"
              />
            </div>
            <Button className="form-validation" color="grey" type="submit">
              Submit
            </Button>
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

Contact.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
  changeContactField: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

// == Export
export default Contact;
