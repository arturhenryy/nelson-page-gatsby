import React from 'react';
import Helmet from 'react-helmet';
import Container from '../components/Container/Container';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container styling-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <div className="content">
    </div>
  </div>
);

export default Contact;

export const query = graphql`
  query stylingPageQuery {
    page: wordpressPage(slug: { eq: "styling" }) {
      title
    }
  }
`
