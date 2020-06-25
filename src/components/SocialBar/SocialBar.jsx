import React from "react"
import * as Styled from "./SocialBar"

const SocialBar = ({ pageHeader }) => {

  return (
    <Styled.SocialBar className="social-bar">
      <div css={Styled.RightBlock} style={{fontSize: '1.25rem'}}>
        <a className="social-link github" href="http://github.com/cnocon" target="_blank" rel="noreferrer">
          <i className="icon-github-circled" css={Styled.Icon}></i>
        </a>
        <a className="social-link twitter" href="http://twitter.com/cnocon" target="_blank" rel="noreferrer">
          <i className="icon-twitter" css={Styled.Icon}></i>
        </a>
        <a className="social-link linkedin" href="https://www.linkedin.com/in/cristinoconnor/" target="_blank" rel="noreferrer">
          <i className="icon-linkedin" css={Styled.Icon}></i>
        </a>
        <a className="social-link email" href="mailto:her@cristin.io">
          <i className="icon-email" css={Styled.Icon}></i>
        </a>
      </div>
    </Styled.SocialBar>
  )
}

export default SocialBar
