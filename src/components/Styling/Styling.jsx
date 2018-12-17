import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image"
import styles from './Styling.module.scss';

const Styling = ({keyVisual}) => (
  <div className={styles.stylingSection} id="key-visual-container">
    {keyVisual && (
      <div className={styles.imageWrapper}>
        <Img sizes={keyVisual.localFile.childImageSharp.sizes} id="key-visual" alt="Styling Key Visual"/>
      </div>
    )}
    <div className={styles.linkContainer}>
      <Link to="/styling" className="big-link">
        View styling projects
      </Link>
    </div>
  </div>
);

export default Styling;
