import React from 'react';
import Helmet from 'react-helmet';
import Container from '../components/Container/Container';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Container text>
    </Container>
  </div>
);

export default Contact;
