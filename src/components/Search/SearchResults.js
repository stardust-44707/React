import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import styles from './Search.scss';


class SearchResult extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
    }

    render() {
      const {cards} = this.props;
      return (
        <section className={styles.component}>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      );
    }
}

export default SearchResult;
