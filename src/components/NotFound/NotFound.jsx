import React from "react"
import * as Styled from '../PostPreview/PostPreview.styles'

const NotFound = () => {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div style={{textAlign: 'center', padding: '4.5rem 0'}}>
      <h1>NOT FOUND</h1>
      <p style={{fontSize: '1.6rem'}}>The page you're looking for doesn't exist.</p>
      <Styled.Button onClick={goBack} to="{}">
      <span className="meta-nav" style={{transform: "rotate(180deg)", display: "inline-block"}}>→</span> Go Back
      </Styled.Button>
    </div>
  )
}

export default NotFound
