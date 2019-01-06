import React, { Component } from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';
import config from '../../../config/SiteConfig';
import './Navigation.scss';
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
        <div className="header-container">
          <div className="name">
            <span>
              <Link to="/">
                <h3>{config.siteTitle}</h3>
              </Link>
            </span>
          </div>
          <nav className="navigation">
            <Link to="/styling" activeClassName="is-active">
              Styling
            </Link>
            <Link to="/art" activeClassName="is-active">
              Art & Exhibitions
            </Link>
            <Link to="/about" activeClassName="is-active">
              About
            </Link>
          </nav>
        </div>
        <div className="mobile-nav">
          <div className="mobile-nav-name">
            <Link to="/">
              <h3>{config.siteTitle}</h3>
            </Link>
          </div>
          <div className="menu">
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={this.handleStateChange}
              customBurgerIcon={<span>Menu</span>}
              customCrossIcon={<span>Menu</span>}
              width="100%"
            >
              <Link to="/styling" activeClassName="is-active" onClick={() => this.closeMenu()}>
                Styling
              </Link>
              <Link to="/art" activeClassName="is-active" onClick={() => this.closeMenu()}>
                Art & Exhibitions
              </Link>
              <Link to="/about" activeClassName="is-active" onClick={() => this.closeMenu()}>
                About
              </Link>
              <Link to="/imprint" activeClassName="is-active" onClick={() => this.closeMenu()}>
                Imprint
              </Link>
            </Menu>
          </div>
        </div>
      </header>
    );
  }
}
