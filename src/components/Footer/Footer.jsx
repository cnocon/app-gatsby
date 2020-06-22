import React, { useEffect, useState } from "react"
import * as Styled from "./Footer.styles"
import logo from "./buttercms-logo.png"
import { window, document } from 'browser-monads';

const Footer = () => {
  const [offset, setOffset] = useState(`2000px`);

  const positionFooter = () => {
    const footerHeight = document.querySelector('.footer').offsetHeight;
    const contentHeight = document.querySelector('main').offsetHeight;
    const topOffset = contentHeight < window.innerHeight ? (window.innerHeight - footerHeight) : contentHeight + footerHeight;
    setOffset(topOffset)
  }

  useEffect(() => {
    positionFooter();
  }, [])

  return(
    <Styled.Footer className="footer" style={{top: offset}} offsetTop={offset}>
      <Styled.FooterInner>
        <Styled.LeftBlock>
          <p css={Styled.paragraph}>&copy; {new Date().getFullYear()} Cristin O'Connor</p>
          <p css={Styled.smParagraph}>Built with{` `}
          <Styled.FooterLink to="https://www.gatsbyjs.org" rel="noreferrer" target="_blank">Gatsby</Styled.FooterLink> and <Styled.FooterLink to="https://emotion.sh/docs/introduction" rel="noreferrer" target="_blank">Emotion</Styled.FooterLink></p>
        </Styled.LeftBlock>
        <Styled.RightBlock>
          <p css={Styled.flexParagraph}>Blog powered by <a href="https://buttercms.com" rel="noreferrer" target="_blank"><Styled.Image src={logo} alt="ButterCMS"/></a></p>
        </Styled.RightBlock>
      </Styled.FooterInner>
    </Styled.Footer>
  )
}

export default Footer
