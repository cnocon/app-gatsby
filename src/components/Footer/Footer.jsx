import React, { useEffect, useState } from "react"
import * as Styled from "./Footer.styles"
import logo from "./buttercms-logo.png"

const Footer = () => {
  const [offset, setOffset] = useState(`2000px`);

  useEffect(() => {
    const footerHeight = 1.75 * document.querySelector('.footer').offsetHeight;
    const contentHeight = document.querySelector('body').offsetHeight;
    console.log('contentHeight', contentHeight)
    const topOffset = contentHeight < window.outerHeight ? (window.outerHeight - footerHeight) : contentHeight;
    console.log('topOffset', topOffset)
    console.log(contentHeight < window.outerHeight);
    setOffset(topOffset)
  }, [])

  return(
    <Styled.Footer className="footer" style={{top: offset}}>
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
