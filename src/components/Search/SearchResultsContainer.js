import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getColumnsForList} from '../../redux/columnsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  columns: getColumnsForList(state, 'list-1'),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
