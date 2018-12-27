import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Info from '../components/Info/Info';
import Art from '../components/Art/Art';
import Styling from '../components/Styling/Styling';

const Index = ({data}) => {
  const { page } = data
  return (
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div className="content">
        <Styling keyVisual={page.acf.key_image} />
        <Art artVisual={page.acf.art_image} />
        <Info aboutText={page.acf.about_text} />
        <img className="overlay-logo" src="/logos/logo.png" alt="Nelson Heinemann Logo"/>
      </div>
    </div>
  );
};

export default Index;

export const query = graphql`
  query homePageQuery {
    page: wordpressPage(slug: { eq: "home" }) {
      title
      acf {
        key_image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1366) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        art_image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1366) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        about_text
      }
    }
  }
`
