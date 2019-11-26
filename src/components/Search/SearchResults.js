import React from 'react';
import Column from '../Column/ColumnContainer.js';
import Container from '../Container/Container';
import styles from './Search.scss';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {
  static propTypes = {
    changeSearchString: PropTypes.func,
    columns: PropTypes.array,
    match: PropTypes.any,
  }

  componentDidMount() {
    this.props.changeSearchString(this.props.match.params.name);
  }

  componentDidUpdate() {
    this.props.changeSearchString(this.props.match.params.name);
  }

  render() {
    const {columns} = this.props;
    return (
      <Container>
        <h2 className={styles.heading}>Search</h2>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} filter={true} />
          ))}
        </div>
      </Container>
    );
  }
}

export default SearchResult;
