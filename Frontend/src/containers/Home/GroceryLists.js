import { connect } from 'react-redux';
import {
  closeGroceryLists,
  closeAllModals,
  saveListData,
  generateGroceryList,
  updateGroceryList,
} from '../../actions/recipes';
// the component is not related to auth actions per se,
// but the action is the same, so we re-use it
import { changeField, loadDatas } from '../../actions/auth';
import GroceryLists from '../../components/Home/Modals/GroceryLists';


// == Data / state
const mapStateToProps = (state) => ({
  groceryListsIsOpen: state.modals.groceryListsIsOpen,
  isConnected: state.auth.isConnected,
  selectedLists: state.modals.selectedLists,
  newGroceryListValue: state.auth.newGroceryList,
  extendedIngredients: state.modals.extendedIngredients,
  userToken: state.auth.userToken,
  groceryLists: state.grocery.list,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  closeGroceryListsModal: () => {
    dispatch(closeGroceryLists());
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
  changeFieldValue: (name, value) => {
    dispatch(changeField(name, value));
  },
  saveListData: (generateListData) => {
    dispatch(saveListData(generateListData));
  },
  generateGroceryList: () => {
    dispatch(generateGroceryList());
  },
  updateGroceryList: () => {
    dispatch(updateGroceryList());
  },
  loadDatas: () => {
    dispatch(loadDatas());
  },
});

// connect(redux)(react)
const GroceryListsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroceryLists);

export default GroceryListsContainer;
