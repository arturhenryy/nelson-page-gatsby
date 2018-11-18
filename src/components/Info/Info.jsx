import React from 'react';
import styles from './Info.module.scss';

const Info = () => (
  <div className={styles.infoSection}>
    <p>
      Nelson Heinemann is a fashion editor, stylist and artist based in Munich, Germany, working all over Europe for various brands and clients. Business inquiries via e-mail
    </p>
    <a href="mailto:nelson.heinemann@gmail" className="big-link">
      Say Hello
    </a>
  </div>
);

export default Info;
