import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import '../utils/all.scss';

import favicon from './favicon-32x32.png';
import appleTouchIcon from './apple-touch-icon.png';

const MainLayout = props => {
  const { children } = props;
  return (
    <React.Fragment>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <meta name="image" content={config.siteDefaultImage} />
        <meta property="og:url"                content="https://nelsonheinemann.com" />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content={config.siteTitle} />
        <meta property="og:description"        content={config.siteDescription} />
        <meta property="og:image"              content={config.siteDefaultImage} />
        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        
      </Helmet>
      <Navigation />
      {children()}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
