import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, getCardsForColumnBySearchString, createAction_addCard} from '../../redux/cardsRedux.js';


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

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
