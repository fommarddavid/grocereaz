import { connect } from 'react-redux';


// Action Creators
import {
  changeContactField,
  sendMessage,
} from '../actions/contact';
import Contact from '../components/Contact';

// == Data / state
const mapStateToProps = (state) => ({
  firstname: state.contact.firstname,
  lastname: state.contact.lastname,
  email: state.contact.email,
  object: state.contact.object,
  message: state.contact.message,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeContactField: (name, value) => {
    dispatch(changeContactField(name, value));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
});

// connect(redux)(react)
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
