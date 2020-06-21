import React from "react"
import * as Styled from "./Footer.styles"
// import { css } from "@emotion/core"
// import logo from "./buttercms-logo.png"
import logo from "./buttercms-logo.png"
// import {Img} from "gatsby-image"

const Footer = () => {
  return(
    <Styled.Footer>
      <Styled.FooterInner>
        <Styled.LeftBlock>
          <p css={Styled.paragraph}>&copy; {new Date().getFullYear()} Cristin O'Connor</p>
          <p css={Styled.smParagraph}>Built with{` `}
          <Styled.FooterLink to="https://www.gatsbyjs.org" rel="noreferrer" target="_blank">Gatsby</Styled.FooterLink> and <Styled.FooterLink to="https://emotion.sh/docs/introduction" rel="noreferrer" target="_blank">Emotion</Styled.FooterLink></p>
        </Styled.LeftBlock>
        <Styled.RightBlock>
          <p css={Styled.flexParagraph}>Blog powered by <a href="https://buttercms.org" rel="noreferrer" target="_blank"><Styled.Image src={logo} alt="ButterCMS"/></a></p>
        </Styled.RightBlock>
      </Styled.FooterInner>
    </Styled.Footer>
  )
}

export default Footer
