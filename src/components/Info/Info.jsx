import React from 'react';
import styles from './Info.module.scss';

const Info = ({aboutText}) => (
  <div className={styles.infoSection}>
    <p>
      {aboutText}
    </p>
    <a href="mailto:nelson.heinemann@gmail" className="big-link">
      Say hello
    </a>
  </div>
);

export default Info;
