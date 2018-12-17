import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image"
import styles from './Art.module.scss';

const Art = ({artVisual}) => (
  <div className="section art-section">
    <div className={styles.artImgContainer}>
      <Img sizes={artVisual.localFile.childImageSharp.sizes} alt="art preview" backgroundColor="rgb(238, 238, 238)" />
    </div>
    <Link to="/art" className="big-link">
      View art & exhibitions
    </Link>
  </div>
);

export default Art;
