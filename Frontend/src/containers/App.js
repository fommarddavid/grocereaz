import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import App from '../components/App';

// Action Creators
import { loadDatas } from '../actions/auth';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  emailHasBeenSent: state.auth.emailHasBeenSent,
  newPasswordIsRegistered: state.auth.newPasswordIsRegistered,
  isNewMember: state.auth.isNewMember,
  isConnected: state.auth.isConnected,
  errorStatus: state.search.errorStatus,
  addToListStatus: state.home.addToListStatus,
  addToFavoriteStatus: state.home.addToFavoriteStatus,
  removeFromFavoriteStatus: state.home.removeFromFavoriteStatus,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  loadDatas: (userData) => {
    dispatch(loadDatas(userData));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
