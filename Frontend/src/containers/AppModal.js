/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import AppModal from '../components/App/AppModal';

// Action Creators
import {
  setAddToListStatus,
  setAddToFavoriteStatus,
  setRemoveFromFavoriteStatus,
  closeAllModals,
  setErrorStatus,
} from '../actions/recipes';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  addToListStatus: state.home.addToListStatus,
  addToFavoriteStatus: state.home.addToFavoriteStatus,
  removeFromFavoriteStatus: state.home.removeFromFavoriteStatus,
  errorStatus: state.search.errorStatus,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  setAddToListStatus: () => {
    dispatch(setAddToListStatus());
  },
  setAddToFavoriteStatus: () => {
    dispatch(setAddToFavoriteStatus());
  },
  setRemoveFromFavoriteStatus: () => {
    dispatch(setRemoveFromFavoriteStatus());
  },
  setErrorStatus: () => {
    dispatch(setErrorStatus());
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppModalContainer = connect(mapStateToProps, mapDispatchToProps)(AppModal);

export default AppModalContainer;
