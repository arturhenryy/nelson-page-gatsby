import React from 'react';
import Helmet from 'react-helmet';
import Container from '../components/Container/Container';
import config from '../../config/SiteConfig';
import styles from './about.module.scss';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Container text>
      <div className="left-margin section">
        <h2>About myself</h2>
        <p>
          2ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
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
    </Container>
  </div>
);

export default About;
