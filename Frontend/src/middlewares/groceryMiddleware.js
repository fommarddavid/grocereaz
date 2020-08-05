import axios from 'axios';

import { loadDatas } from '../actions/auth';

import {
  LOAD_INGREDIENTS,
  DELETE_LIST,
  saveIngredientsList,
} from '../actions/grocery';

const groceryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_INGREDIENTS: {
      // console.log('Lancement de l\'action LOAD_INGREDIENTS...');
      const state = store.getState();
      const listId = state.grocery.selectedId;
      // console.log(listId);
      axios
        .post(
          `${process.env.URL_API}/api/user/shopping-list`,
          {
            token: sessionStorage.getItem('userToken'),
            shoppingListId: listId,
          },
        )
        .then((response) => {
          store.dispatch(saveIngredientsList(response.data.userShoppingList));
          sessionStorage.setItem(
            'ingredientsList',
            JSON.stringify(response.data.userShoppingList),
          );
        })
        .catch((error) => {
          console.error("Une erreur s'est produite", error);
        });
      break;
    }

    case DELETE_LIST: {
      const state = store.getState();
      axios
        .post(
          `${process.env.URL_API}/api/user/shopping-list-remove/${state.grocery.selectedId}`,
          {
            token: sessionStorage.getItem('userToken'),
          },
        )
        .then((response) => {
          if (response.data.resultat) {
            store.dispatch(loadDatas());
          }
        })
        .catch((error) => {
          console.error("Une erreur s'est produite", error);
        });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default groceryMiddleware;
