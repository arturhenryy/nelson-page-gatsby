import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import styles from './about.module.scss';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <div className="content">
      <div className="left-margin section">
        <h2>About myself</h2>
        <p>
        Nelson Heinemann is a fashion stylist and artist based in Munich, Germany working across europe.
He worked for clients like Neue Züricher Zeitung, Condé Nast Germany, GLAMOUR Germany, VOGUE Germany, Süddeutsche Zeitung Magazin, INTERSECTION Magazine, HART, MYTHERESA.com, Herrlicher and many others.
        </p>
        <p className="mt-2">
          For business inquiries: <br />
          <a href="mailto:nelson.heinemann@gmail">nelson.heinemann@gmail </a>
        </p>
        <div className={styles.aboutBottomSection}>
          <p>
            <span>Social Media:</span>
            <br />
            <a href="https://www.instagram.com/nelsonheinemann/" rel="noopener noreferrer" target="_blank">
              Instagram
            </a>
            <br />
            <a href="https://www.facebook.com/nelson.heinemann" rel="noopener noreferrer" target="_blank">
              Facebook
            </a>
            <br />
            <a href="https://www.pinterest.de/nelsonheinemann/" rel="noopener noreferrer" target="_blank">
              Pinterest
            </a>
          </p>
          <img src="./portrait.jpg" alt="portrait" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
