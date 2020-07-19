import React from 'react'

const IconListItem = ({ icon, link, text, classes }) => {
  return(
    <li>
      <a href={link} rel="noreferrer" target="_blank">
        <i className={`${icon} ${classes}`}></i>
        {/* <i className={`${icon} rainbow-icon-narrow rainbow-box-shadow-rounded`}></i> */}
        {/* <i className={`${icon}`}></i> */}
        {` `}
        {/* <span className="rainbow-border-sm">{text}</span> */}
        <span>{text}</span>
      </a>
    </li>
  )
}

export default IconListItem