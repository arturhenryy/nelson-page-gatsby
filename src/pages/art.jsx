import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import styles from './art.module.scss';

const exhibitions = [
  '2014: Interface Culture, ARS Electronica – Linz, Austria',
  '2014: AB/ART, Villa Mohr – Munich, Germany',
  '2015: Block VI, Muffathalle – Munich, Germany',
  '2017: Nelson Hteinemann: Selected Works, Lost Weekend – Munich, Germany ',
  '2018: Identity - Various Perspectives, Mates – Munich, Germany',
]

const Art = () => (
  <div className="container art-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <div className="content">
      <div className="left-margin exhibtion-section section">
        <h2>Exhibitions</h2>
        <ul className={styles.exhibtionList}>
          {exhibitions.map((exhibtion, index) => (
            <li key={index}>{exhibtion}</li>
          ))}
        </ul>
      </div>
      <div className="illustration-section section">
        <div className="left-margin">
          <h2>Illustration: I am the graves of the 80s</h2>
        </div>
        <img src="./illustrations-artwork.png" alt="illustrations-artwork" />
        <a
          href="https://www.instagram.com/iamthegravesofthe80s/"
          className="big-link left-margin"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit @iamthegravesofthe80s
        </a>
      </div>
      <div className="effortless-section section">
        <div className="left-margin">
          <h2>Project: Effortless Munich</h2>
        </div>
        <img src="./effortless-artwork.png" alt="effortless-artwork" />
        <a
          href="https://www.instagram.com/effortlessmunich/"
          className="big-link left-margin"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit @effortlessmunich
        </a>
      </div>
      <div className="digichloreans-section section">
        <div className="left-margin">
          <h2>Digichloreans</h2>
        </div>
        <img src="./digichloreans-artwork.jpg" alt="digichloreans-artwork" />
      </div>
    </div>
  </div>
);

export default Art;
