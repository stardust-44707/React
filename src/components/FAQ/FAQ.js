import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {FAQData} from '../../data/dataStore';

class FAQ extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.node,
    description: PropTypes.string,
  }
  static defaultProps = {
    title: FAQData.title,
    image: FAQData.image,
    description: FAQData.description,
  }

  render() {
    const {title, image, description} = this.props;
    return (
      <Container>
        <Hero titleText={title} image={image} />
        <p>{description}</p>
      </Container>
    );
  }
}

export default FAQ;
