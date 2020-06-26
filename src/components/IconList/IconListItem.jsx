import React from 'react'

const IconListItem = ({ icon, link, text }) => {
  return(
    <li>
      <i className={icon}></i> <a href={link}>{text}</a>
    </li>
  )
}

export default IconListItem