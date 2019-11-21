import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForColumn, getCardsForColumnBySearchString} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  if(props.filter) {
    return {
      cards: getCardsForColumnBySearchString(state, props.id),
    };
  } else {
    return {
      cards: getCardsForColumn(state, props.id),
    };
  }
};

export default connect(mapStateToProps)(SearchResults);
