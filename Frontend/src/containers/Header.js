import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { closeAllModals } from '../actions/recipes';
import Header from '../components/Header';
// == Data / state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
  connectedFirstname: state.auth.firstname,
  connectedLastname: state.auth.lastname,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

// connect(redux)(react)
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
