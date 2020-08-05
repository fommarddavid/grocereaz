
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOAD_DATAS = 'LOAD_DATAS';
export const SET_IS_CONNECTED = 'SET_IS_CONNECTED';
export const SAVE_USER_DATAS = 'SAVE_USER_DATAS';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const SET_IS_NEW_MEMBER = 'SET_IS_NEW_MEMBER';

export const SET_EMAIL_HAS_BEEN_SENT = 'SET_EMAIL_HAS_BEEN_SENT';
export const SET_PASSWORD_TOKEN = 'SET_PASSWORD_TOKEN';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const SET_NEW_PASSWORD_IS_REGISTERED = 'SET_NEW_PASSWORD_IS_REGISTERED';

export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

export const DISPLAY_ERRORS = 'DISPLAY_ERRORS';


export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});
export const login = () => ({
  type: LOGIN,
});
export const loadDatas = () => ({
  type: LOAD_DATAS,
});
export const setIsConnected = () => ({
  type: SET_IS_CONNECTED,
});
export const saveUserDatas = (
  shoppingList,
  firstname,
  lastname,
  email,
) => ({
  type: SAVE_USER_DATAS,
  shoppingList,
  firstname,
  lastname,
  email,
});
export const logout = () => ({
  type: LOGOUT,
});
export const register = () => ({
  type: REGISTER,
});
export const setIsNewMember = () => ({
  type: SET_IS_NEW_MEMBER,
});
// Actions
export const SEND_RESET_PASSWORD = 'SEND_RESET_PASSWORD';
// Actions Creators
export const sendResetPassword = () => ({
  type: SEND_RESET_PASSWORD,
});
export const setEmailHasBeenSent = () => ({
  type: SET_EMAIL_HAS_BEEN_SENT,
});
export const setPasswordToken = (token) => ({
  type: SET_PASSWORD_TOKEN,
  token,
});
export const resetPassword = () => ({
  type: RESET_PASSWORD,
});
export const setNewPasswordIsRegistered = () => ({
  type: SET_NEW_PASSWORD_IS_REGISTERED,
});

export const changeUserData = (id, firstname, lastname, email) => ({
  type: CHANGE_USER_DATA,
  id,
  firstname,
  lastname,
  email,
});

export const updateData = () => ({
  type: UPDATE_DATA,
});

export const displayErrors = (errors) => ({
  type: DISPLAY_ERRORS,
  errors,
});
