import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import styles from './styling.module.scss';

export default ({ data }) => {

  const { page } = data
  const stylingImages = page.acf.styling_images
  const stylingImagesMobile = page.acf.stylingImagesMobile

  return (
    <div className="container styling-container">
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <div className="content">
        <div className="styling-container">
        {

        }
        </div>
        <div className="styling-container-mobile">
        {

        }
        </div>
      </div>
    </div>
  )
};

export const query = graphql`
  query stylingPageQuery {
    page: wordpressPage(slug: {eq: "styling"}) {
      title
      acf {
        styling_images {
          styling_image {
            localFile {
              childImageSharp {
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
