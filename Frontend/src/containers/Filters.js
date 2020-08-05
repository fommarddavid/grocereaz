import { connect } from 'react-redux';
import { updateSelectedFilters } from '../actions/recipes';
import Filters from '../components/Filters';

// == Data / state
const mapStateToProps = (state) => ({
  selectedFilters: state.search.selectedFilters,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  updateSelectedFilters: (selectedFilters) => {
    dispatch(updateSelectedFilters(selectedFilters));
  },
});

// connect(redux)(react)
const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default FiltersContainer;
