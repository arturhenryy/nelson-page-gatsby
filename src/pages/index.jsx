import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Info from '../components/Info/Info';
import Art from '../components/Art/Art';
import Styling from '../components/Styling/Styling';

const Index = () => {
  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div className="content">
        <Styling />
        <Art />
        <Info />
      </div>
    </div>
  );
};

export default Index;
