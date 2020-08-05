import {
  CHANGE_FIELD,
  SET_IS_CONNECTED,
  SAVE_USER_DATAS,
  SET_IS_NEW_MEMBER,
  SET_EMAIL_HAS_BEEN_SENT,
  SET_PASSWORD_TOKEN,
  SET_NEW_PASSWORD_IS_REGISTERED,

  CHANGE_USER_DATA,
  DISPLAY_ERRORS,
} from '../actions/auth';

// newGroceryList is not linked to auth actions per se,
// but we need to reuse the CHANGE FIELD action
const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  isConnected: false,
  isNewMember: false,
  emailHasBeenSent: false,
  newPasswordIsRegistered: false,
  userToken: '',
  passwordToken: '',
  shoppingList: [],
  object: '',
  message: '',
  newGroceryList: '',
};

// Reducer
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_IS_CONNECTED:
      return {
        ...state,
        isConnected: true,
      };
    case SAVE_USER_DATAS:
      return {
        ...state,
        shoppingList: action.shoppingList,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
      };
    case SET_IS_NEW_MEMBER:
      return {
        ...state,
        isNewMember: !state.isNewMember,
      };
    case SET_EMAIL_HAS_BEEN_SENT:
      return {
        ...state,
        emailHasBeenSent: !state.setEmailHasBeenSent,
      };
    case SET_PASSWORD_TOKEN:
      return {
        ...state,
        passwordToken: action.token,
      };
    case SET_NEW_PASSWORD_IS_REGISTERED:
      return {
        ...state,
        newPasswordIsRegistered: !state.newPasswordIsRegistered,
      };
    case CHANGE_USER_DATA:
      return {
        ...state,
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
      };
    case DISPLAY_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default authReducer;
