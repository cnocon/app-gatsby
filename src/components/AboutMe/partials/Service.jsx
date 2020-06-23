import React from 'react'
import { ServiceDiv } from '../AboutMe.styles'

const Service = ({ color, icon, title, text }) => {
  return (
    <div className="col-sm-6 col-md-3">
      <ServiceDiv className={`service ${color}`}>
        <i className={ icon }></i>
        <h4><span>{title}</span></h4>
        <p>{text}</p>
      </ServiceDiv>
    </div>
  )
}

export default Service
