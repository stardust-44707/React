import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {infoData} from '../../data/dataStore';

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.node,
    description: PropTypes.node,
  }
  static defaultProps = {
    title: infoData.title,
    image: infoData.image,
    description: infoData.description,
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


export default Info;
