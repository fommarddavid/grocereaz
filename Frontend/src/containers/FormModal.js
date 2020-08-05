import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import { doSomething } from '../actions/demo';
import FormModal from '../components/FormModal';

// Action Creators

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
  isNewMember: state.auth.isNewMember,
  emailHasBeenSent: state.auth.emailHasBeenSent,
  newPasswordIsRegistered: state.auth.newPasswordIsRegistered,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  doAction: () => {
    dispatch(doSomething('Hello'));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const FormModalContainer = connect(mapStateToProps, mapDispatchToProps)(FormModal);

export default FormModalContainer;
