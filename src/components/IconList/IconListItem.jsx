import React from 'react'

const IconListItem = ({ icon, link, text }) => {
  return(
    <li>
      <a href={link} rel="noopener nofollow" target="_blank"><i className={icon}></i> <span>{text}</span></a>
    </li>
  )
}

export default IconListItem