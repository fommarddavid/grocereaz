// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Header from '../../containers/Header';
import NavbarUser from '../../containers/NavbarUser';
import Home from '../../containers/Home/Home';
import GroceryLists from '../../containers/GroceryLists';
import GroceryList from '../../containers/GroceryList';
import UserData from '../../containers/UserData';
import SignUp from '../../containers/SignUp';
import SignIn from '../../containers/SignIn';
import Footer from '../Footer';
import MobileNavbar from '../../containers/MobileNavbar';
import ForgottenPwd from '../../containers/ForgottenPwd';
import ResetPwd from '../../containers/ResetPwd';
import FavoriteRecipes from '../../containers/FavoriteRecipes';
import AboutUs from '../AboutUs';
import Contact from '../../containers/Contact';
import GlobalStyles from '../../styles/GlobalStyles';
import AppModal from '../../containers/AppModal';

import AppStyled from './AppStyled';

// == Composant
const App = ({
  emailHasBeenSent,
  newPasswordIsRegistered,
  isNewMember,
  isConnected,
  loadDatas,
  errorStatus,
  addToListStatus,
  addToFavoriteStatus,
  removeFromFavoriteStatus,
}) => {
  useEffect(() => {
    const userToken = sessionStorage.getItem('userToken');

    if (userToken !== null) {
      loadDatas();
    }
  }, [loadDatas]);

  return (
    <AppStyled>
      {addToListStatus && (
        <AppModal
          modalStatus={addToListStatus}
          icon="trophy"
          title="RECIPE ADDED"
          comment="Recipe successfully added to your favorite recipes ! Do you want to keep exploring recipes or access to your favorite recipes ?"
          color="green"
        />
      )}
      {addToFavoriteStatus && (
        <AppModal
          modalStatus={addToFavoriteStatus}
          icon="heart outline"
          title="RECIPE ADDED TO YOUR FAVORITES"
          comment="Recipe successfully added to your grocery list ! Do you want to keep exploring recipes or access to your grocery lists"
          color="green"
        />
      )}
      {removeFromFavoriteStatus && (
        <AppModal
          modalStatus={removeFromFavoriteStatus}
          icon="trash"
          title="RECIPE REMOVED FROM YOUR FAVORITES"
          comment="Recipe successfully removed from your favorite recipes !"
          color="green"
        />
      )}
      {errorStatus && (
        <AppModal
          modalStatus={errorStatus}
          icon="ambulance"
          title="NO RESULTS"
          comment="Your request didn't get any results. Maybe you asked for a lactose-free recipe containing cheese ;) ? Please try something else !"
          color="red"
        />
      )}

      <GlobalStyles />
      <div className="top-page">
        <Header />
        <NavbarUser />
      </div>
      <div className="middle-page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/grocery-lists" component={GroceryLists} />
          <Route exact path="/grocery-lists/:id" component={GroceryList} />
          <Route exact path="/favorite-recipes" component={FavoriteRecipes} />

          <Route exact path="/user-data" component={UserData} />

          <Route exact path="/sign-up">
            {!isNewMember ? <SignUp /> : <Redirect to="/sign-in" />}
          </Route>
          <Route exact path="/sign-in">
            {!isConnected ? <SignIn /> : <Redirect to="/grocery-lists" />}
          </Route>
          <Route exact path="/forgotten-pwd">
            {!emailHasBeenSent ? <ForgottenPwd /> : <Redirect to="/" />}
          </Route>
          {!newPasswordIsRegistered
            ? <Route exact path="/reset-pwd/:token" component={ResetPwd} />
            : <Redirect to="/sign-in" />}

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about-us" component={AboutUs} />

          <Route>
            <AppModal
              modalStatus
              icon="warning sign"
              title="WARNING!!!"
              comment="Something went wrong... you will be redirected to the home page."
              color="red"
            />
          </Route>

        </Switch>
        <div className="footer-mobile">
          <Footer />
        </div>
      </div>
      <div className="footer-desktop">
        <Footer />
      </div>
      <div className="mobile-navbar">
        <MobileNavbar />
      </div>
    </AppStyled>
  );
};

App.propTypes = {
  emailHasBeenSent: PropTypes.bool.isRequired,
  newPasswordIsRegistered: PropTypes.bool.isRequired,
  isNewMember: PropTypes.bool.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  addToListStatus: PropTypes.bool.isRequired,
  addToFavoriteStatus: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  removeFromFavoriteStatus: PropTypes.bool.isRequired,
  loadDatas: PropTypes.func.isRequired,
};
// == Export
export default App;
