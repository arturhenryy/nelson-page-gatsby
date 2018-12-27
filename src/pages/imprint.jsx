import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';

const Imprint = ({data}) => {
  
  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div className="content">
        
      </div>
    </div>
  );
};

export default Imprint;

