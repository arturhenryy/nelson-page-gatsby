import React from 'react';
import Link from 'gatsby-link';
import styles from './Styling.module.scss';

const Styling = () => (
  <div className={styles.stylingSection} id="key-visual-container">
    <img src="/key-visual.jpg" id="key-visual" alt="key-visual" />
    <div className={styles.linkContainer}>
      <Link to="/styling" className="big-link">
        View styling projects
      </Link>
    </div>
  </div>
);

export default Styling;
