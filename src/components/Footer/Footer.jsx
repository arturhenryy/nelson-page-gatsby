import React from 'react';
import Link from 'gatsby-link';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.footerNavigation}>
      <ul>
        <li>
          <Link to="/styling" activeClassName="active">
            Styling
          </Link>
        </li>
        <li>
          <Link to="/art" activeClassName="active">
            Art & Exhibitions
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/imprint" activeClassName="active">
            Imprint
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="mailto:nelson.heinemann@gmail.com">E-Mail</a>
        </li>
        <li>
          <a href="https://www.instagram.com/nelsonheinemann/" rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
