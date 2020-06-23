/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ sdescription, lang, meta, stitle, imagePath }) {
  const metaDescription = sdescription || `Professional blog and CV site for Front End Developer Cristin O'Connor`
  const image = imagePath || 'https://cristin.io/images/cristin-io-favicon.png'
  const title = stitle || `Cristin O'Connor | Front End Developer`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `twitter:site`,
          content: `@cnocon`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@cnocon`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH" crossorigin="anonymous"/>
      {/* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/skins/doxy.css"></link> */}
      {/* <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=doxy"></script> */}
      <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
      {/* <script type="text/javascript" src="https://platform.twitter.com/widgets.js" charset="utf-8" async="true"></script> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
