import { connect } from 'react-redux';
// Du composant qui a besoin de data ou d'actions
import {
  saveSelectedId,
  deleteList,
} from '../actions/grocery';

import GroceryLists from '../components/GroceryLists';

// Action Creators
// import { doSomething } from 'src/actions/demo';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  groceryLists: state.auth.shoppingList,
});


// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  saveSelectedId: (id) => {
    dispatch(saveSelectedId(id));
  },
  deleteList: () => {
    dispatch(deleteList());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GroceryListsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroceryLists);

export default GroceryListsContainer;
