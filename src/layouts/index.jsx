import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import '../utils/emma.scss';

import favicon from './favicon.png';
import appleTouchIcon from './apple-touch-icon.png';

const MainLayout = props => {
  const { children } = props;
  return (
    <React.Fragment>
      <Helmet>
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
      </Helmet>
      <SEO />
      <Navigation />
      {children()}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
