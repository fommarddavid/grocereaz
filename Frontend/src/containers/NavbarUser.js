import { connect } from 'react-redux';

import { closeAllModals } from '../actions/recipes';
import { eraseIngredientsList } from '../actions/grocery';
import NavbarUser from '../components/NavbarUser';


// == Data / state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  eraseIngredientsList: () => {
    dispatch(eraseIngredientsList());
  },
});

// connect(redux)(react)
const NavbarUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarUser);

export default NavbarUserContainer;
