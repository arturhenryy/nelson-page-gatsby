import React, { Component } from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';
import './Headroom.scss';


export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.name}>
            <span>
              <Link to="/">
                <h3>{config.siteTitle}</h3>
              </Link>
            </span>
          </div>
          <nav className={styles.navigation}>
            <Link to="/styling" activeClassName="active">
              Styling
            </Link>
            <Link to="/art" activeClassName="active">
              Art & Exhibitions
            </Link>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </nav>
        </div>
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavName}>
            <Link to="/">
              <h3>{config.siteTitle}</h3>
            </Link>
          </div>
          <div className={styles.menu}>
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={this.handleStateChange}
              customBurgerIcon={<span>Menu</span>}
              customCrossIcon={<span>Menu</span>}
              width="100%"
            >
              <Link to="/styling" activeClassName="active" onClick={() => this.closeMenu()}>
                Styling
              </Link>
              <Link to="/art" activeClassName="active" onClick={() => this.closeMenu()}>
                Art & Exhibitions
              </Link>
              <Link to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                About
              </Link>
              <Link to="/imprint" activeClassName="active" onClick={() => this.closeMenu()}>
                Imprint
              </Link>
            </Menu>
          </div>
        </div>
      </header>
    );
  }
}
