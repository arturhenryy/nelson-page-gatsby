import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';

const Imprint = ({data}) => {
  
  const { page } = data

  return (
    <div className="imprint-container container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div className="content">
        <div className="left-margin section pr-4">
          <h2>Imprint</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </div>
    </div>
  );
};

export default Imprint;

export const query = graphql`
  query imprintPageQuery {
    page: wordpressPage(slug: {eq: "imprint"}) {
      title
      content
    }
  }
`

