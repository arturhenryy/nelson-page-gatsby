import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Img from 'gatsby-image'

const About = ({ data }) => {
  const { page } = data
  return (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <div className="content">
      <div className="left-margin section pr-4">
        <h2>{page.acf.headline}</h2>
        <p>
          {page.acf.text}
        </p>
        <p className="mt-2">
          {page.acf.contact_link_headline} <br />
          <a href={`mailto:${page.acf.contact_link_mail}`}>{page.acf.contact_link_mail}</a>
        </p>
        <div className="about-bottom-section">
          <p>
            <a href="https://www.instagram.com/nelsonheinemann/" rel="noopener noreferrer" target="_blank">
              Instagram
            </a>         
          </p>
          <Img sizes={page.acf.about_image.localFile.childImageSharp.sizes} alt="Nelson Heinemann Portrait"/>
          <img className="overlay-icon" src="/info.png" alt="Nelson Heinemann Logo"/>
        </div>
      </div>
    </div>
  </div>
  )
};

export default About;

export const query = graphql`
  query aboutPageQuery {
    page: wordpressPage(slug: {eq: "about"}) {
      acf {
        headline
        text
        contact_link_headline
        contact_link_mail
        about_image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1366) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
