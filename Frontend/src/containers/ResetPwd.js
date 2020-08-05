import { connect } from 'react-redux';

// Action Creators
import {
  changeField,
  setPasswordToken,
  resetPassword,
} from '../actions/auth';

// Component that needs action or value
import ResetPwd from '../components/ResetPwd';

// == Data / state
// We prepare an object with the props expected by the component
const mapStateToProps = (state, ownProps) => ({
  passwordValue: state.auth.password,
  confirmPasswordValue: state.auth.confirmPassword,
  passwordToken: ownProps.match.params.token,
});


// == Actions / dispatch
// We prepare an object with the props expected by the component
const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => {
    dispatch(changeField(name, value));
  },
  setPasswordToken: (token) => {
    dispatch(setPasswordToken(token));
  },
  resetPassword: () => {
    dispatch(resetPassword());
  },
});

// creation of the link : container
// connect(redux)(react) - connect(what we need)(who needs it)
const ResetPwdContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPwd);

export default ResetPwdContainer;
