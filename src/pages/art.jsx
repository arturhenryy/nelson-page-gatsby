import React from 'react';
import Helmet from 'react-helmet';
import Img from "gatsby-image"
import config from '../../config/SiteConfig';

export default ({ data }) => {
  const { page } = data
  const stylingImages = page.acf.styling_images
  const exhibitions = page.acf.exhibitions
  const artProjects = page.acf.art_projects
  return (
    <div className="container art-container">
      <Helmet title={`Art | ${config.siteTitle}`} />
      <div className="content">
        <div className="left-margin exhibtion-section section">
          <h2>Exhibitions</h2>
          <ul className="exhibition-list">
            {exhibitions.map((exhibtion, index) => (
              <li key={index}>{exhibtion.exhibition_year_and_title}</li>
            ))}
          </ul>
        </div>
        {
          artProjects.map((project, index) => {
            return (
              <div className="section" key={project.art_project_link}>
                {
                  project.art_project_title && (
                    <div className="left-margin">
                      <h2>{project.art_project_title}</h2>
                    </div>
                  )
                }
                <Img sizes={project.art_project_image.localFile.childImageSharp.sizes} alt="Illustration Artwork"/>
                {
                  project.art_project_link && (
                    <a
                      href={project.art_project_link}
                      className="big-link left-margin"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.art_project_link_text}
                    </a>
                  )
                }
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export const query = graphql`
  query artPageQuery {
    page: wordpressPage(slug: {eq: "art"}) {
      title
      acf {
        exhibitions {
          exhibition_year_and_title
        }
        art_projects {
          art_project_title
          art_project_link
          art_project_link_text
          art_project_image {
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
  }
`
