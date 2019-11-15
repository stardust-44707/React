import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <Search />
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/' component={Link}><Icon name={settings.header.icon}/></Link>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
