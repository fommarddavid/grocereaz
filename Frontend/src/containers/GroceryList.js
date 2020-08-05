import { connect } from 'react-redux';

// Action Creators
import {
  loadIngredients,
  saveSelectedId,
} from '../actions/grocery';

// Du composant qui a besoin de data ou d'actions
import GroceryList from '../components/GroceryList';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state, ownProps) => ({
  selectedId: Number(ownProps.match.params.id),
  ingredientsList: state.grocery.ingredientsList,
});


// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  loadIngredients: () => {
    dispatch(loadIngredients());
  },
  saveSelectedId: (id) => {
    dispatch(saveSelectedId(id));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroceryList);

export default GroceryListContainer;
