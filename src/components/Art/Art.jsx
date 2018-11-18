import React from 'react';
import Link from 'gatsby-link';
import styles from './Art.module.scss';

const Art = () => (
  <div className="section art-section">
    <div className={styles.artImgContainer}>
      <img src="./home-illustrations.png" alt="art preview" />
    </div>
    <Link to="/art" className="big-link">
      View art & exhibitions
    </Link>
  </div>
);

export default Art;
