import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const HtmlHeader = ({ title, description = "", meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const content = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: "sk"
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content
        },
        {
          property: `og:type`,
          content: `website`
        },
        ...meta
      ]}
    />
  );
};

export default HtmlHeader;