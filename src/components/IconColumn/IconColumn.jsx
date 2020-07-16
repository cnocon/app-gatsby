import React from 'react'
import { IconColumnDiv } from './IconColumn.styles'
import ReactHtmlParser from 'react-html-parser'

const IconColumn = ({ color, icon, title, text, columnClasses }) => {
  return (
    <div className={`${columnClasses}`}>
      <IconColumnDiv className={`IconColumn ${color}`}>
        <i className={`${icon} rainbow-icon-narrow`}></i>
        {/* <i className={`${icon} rainbow-icon-narrow`}></i> */}
        {/* <i className={`${icon} rainbow-icon-narrow`}></i> */}
        <h4>
          <span>{ title }</span>
        </h4>
        <p>{ ReactHtmlParser(text) }</p>
      </IconColumnDiv>
    </div>
  )
}

export default IconColumn
