import axios from 'axios';

import {
  LOGIN,
  LOAD_DATAS,
  loadDatas,
  setIsConnected,
  saveUserDatas,
  LOGOUT,
  REGISTER,
  setIsNewMember,
  SEND_RESET_PASSWORD,
  setEmailHasBeenSent,
  RESET_PASSWORD,
  UPDATE_DATA,
  setNewPasswordIsRegistered,
} from '../actions/auth';

// Middleware
const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios
        .post(`${process.env.URL_API}/api/login`, {
          email: state.auth.email,
          password: state.auth.password,
        })
        .then((response) => {
          // console.log('AuthMiddleware login ok :', response.data);
          // console.log('Enregistrement userToken dans sessionStorage');
          sessionStorage.setItem('userToken', response.data.token);
          if (response.data.result) {
            store.dispatch(loadDatas());
          }
          // console.log('Fin login');
        })
        .catch((error) => {
          console.error("Une erreur s'est produite", error);
          window.location.href = '/error';
        });
      break;
    }
    case LOAD_DATAS: {
      const userToken = sessionStorage.getItem('userToken');
      axios
        .post(`${process.env.URL_API}/api/user/`, {
          token: userToken,
        })
        .then((response) => {
          // console.log('AuthMiddleware loadData :', response.data);
          if (response.data.resultat) {
            // console.log('Enregistrement des userDatas dans sessionStorage');
            // console.log(response.data);
            sessionStorage.setItem('shoppingList', JSON.stringify(response.data.shoppingList));
            // console.log('Enregistrement des userDatas dans le State');
            store.dispatch(saveUserDatas(
              response.data.shoppingList,
              response.data.firstname,
              response.data.lastname,
              response.data.email,
            ));
            store.dispatch(setIsConnected());
          }
        })
        .catch((error) => {
          console.error('Une erreur s\'est produite', error);
          window.location.href = '/error';
        });
      break;
    }
    case LOGOUT: {
      console.log("Lancement de l'action LOGOUT...");
      // const state = store.getState();
      axios
        .get(`${process.env.URL_API}/api/logout`)
        .then((response) => {
          console.log('AuthMiddleware déconnection ok :', response.data);
        })
        .catch((error) => {
          console.error("Une erreur s'est produite", error);
          window.location.href = '/error';
        });
      break;
    }

    case REGISTER: {
      const state = store.getState();
      axios
        .post(`${process.env.URL_API}/api/register`, {
          firstname: state.auth.firstname,
          lastname: state.auth.lastname,
          email: state.auth.email,
          password: state.auth.password,
          password_confirmation: state.auth.confirmPassword,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data.resultat) {
            store.dispatch(setIsNewMember());
          }
        })
        .catch((error) => {
          console.error(error);
          window.location.href = '/error';
        });
      break;
    }

    case SEND_RESET_PASSWORD: {
      // console.log("Lancement de l'action SEND_RESET_PASSWORD...");
      const state = store.getState();
      axios
        .post(`${process.env.URL_API}/api/forgotten-pwd`, {
          email: state.auth.email,
        })
        .then((response) => {
          // console.log('AuthMiddleware sendResetPassword ok :', response.data);
          if (response.data.result) {
            store.dispatch(setEmailHasBeenSent());
          }
        })
        .catch((error) => {
          console.error("Une erreur s'est produite", error);
        });
      break;
    }
    case RESET_PASSWORD: {
      const state = store.getState();
      axios
        .post(`${process.env.URL_API}/api/reset-pwd`, {
          password: state.auth.password,
          password_confirmation: state.auth.confirmPassword,
          token: state.auth.passwordToken,
        })
        .then((response) => {
          // console.log('AuthMiddleware resetPassword ok :', response.data);
          if (response.data.result !== false) {
            store.dispatch(setNewPasswordIsRegistered());
          }
        })
        .catch((error) => {
          console.error("Une erreur s'est produite", error);
        });
      break;
    }
    case UPDATE_DATA: {
      const state = store.getState();
      // I launch an ajax request to my server
      // I'm sending the sign up data (firstname, lastname, email, password)
      axios({
        method: 'post',
        url: `${process.env.URL_API}/api/user/edit`,
        data: {
          token: sessionStorage.getItem('userToken'),
          firstname: state.user.firstname,
          lastname: state.user.lastname,
          email: state.user.email,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default authMiddleware;
