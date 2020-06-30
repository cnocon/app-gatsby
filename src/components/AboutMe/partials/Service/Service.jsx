import React from 'react'
import { ServiceDiv } from './Service.styles'
import ReactHtmlParser from 'react-html-parser'

const Service = ({ color, icon, title, text, classes }) => {
  return (
    <div className="col-sm-6 col-md-3" style={{marginBottom: '3rem'}}>
      <ServiceDiv className={`service ${color}`}>
        <i className={ icon }></i>
        <h4><span>{title}</span></h4>
        <p>{ReactHtmlParser(text)}</p>
      </ServiceDiv>
    </div>
  )
}

export default Service
