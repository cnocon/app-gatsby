import React from 'react'

const IconListItem = ({ icon, link, text, classes }) => {
  return(
    <li>
      <a href={link} rel="noreferrer" target="_blank">
        <i className={`${icon} ${classes} rainbow-text`}></i>
        <span>{text}</span>
      </a>
    </li>
  )
}

export default IconListItem