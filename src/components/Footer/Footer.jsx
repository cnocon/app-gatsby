import React, { useEffect, useState } from "react"
import * as Styled from "./Footer.styles"
import IconList from "../IconList/IconList"
import logo from "./buttercms-logo.png"
import { window, document } from 'browser-monads';

const Footer = () => {
  const [offset, setOffset] = useState(`2000px`);

  const positionFooter = () => {
    const footerHeight = document.querySelector('.footer').offsetHeight;
    const contentHeight = document.querySelector('main').offsetHeight;
    const topOffset = contentHeight < window.innerHeight ? (window.innerHeight + .25*footerHeight) : contentHeight + footerHeight;
    setOffset(topOffset)
  }

  useEffect(() => {
    positionFooter();
  }, [])

  return(
    <Styled.Footer className="footer" style={{top: offset}} offsetTop={offset}>
      <Styled.FooterInner>
        <div class="row" css={Styled.Row}>
        <IconList listItems={[
          {
            icon: 'fab fa-codepen',
            link: 'https://codepen.io/cnocon',
            text: 'CodePen'
          },
          {
            icon: 'fab fa-github',
            link: 'https://github.com/cnocon',
            text: 'GitHub'
          },
          {
            icon: 'fab fa-twitter',
            link: 'https://twitter.com/cnocon',
            text: 'Twitter'
          },
          {
            icon: 'fab fa-linkedin-in',
            link: 'https://www.linkedin.com/in/cristinoconnor',
            text: 'LinkedIn'
          }
          ]} 
        />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Styled.LeftBlock>
              <p css={Styled.paragraph}>
                <span css={Styled.date}>&copy;{` `}{new Date().getFullYear()}</span>{` `}
                <span css={Styled.date}>Cristin O'Connor</span>
              </p>

              <p css={Styled.smParagraph}>
                Built using{` `}

                <Styled.FooterLink
                  href="https://www.gatsbyjs.org"
                  rel="noreferrer"
                  target="_blank">
                  Gatsby
                </Styled.FooterLink>
                
                {` `}and{` `}
                
                <Styled.FooterLink
                  href="https://emotion.sh/docs/introduction"
                  rel="noreferrer"
                  target="_blank">
                  Emotion
                </Styled.FooterLink>
              </p>  
            </Styled.LeftBlock>
          </div>
          
          <div className="col-sm-12 col-md-6">
            <Styled.RightBlock>
              <p css={Styled.flexParagraph}>
                <span css={Styled.date}>BLOG POWERED BY</span>
                <a href="https://buttercms.com" rel="noreferrer" target="_blank">
                  <Styled.Image src={logo} alt="ButterCMS"/>
                </a>
              </p>
            </Styled.RightBlock>
          </div>
        </div>
      </Styled.FooterInner>
    </Styled.Footer>
  )
}

export default Footer
