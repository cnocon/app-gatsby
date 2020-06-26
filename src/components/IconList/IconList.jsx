import React from 'react'
import IconListItem from './IconListItem'

const IconList = ({ listItems }) => {
  const mappedItems = listItems.map(item => <IconListItem key={item.link} {...item} />)


  return (
    <ul>
      {mappedItems}
    </ul>
  )   
}

export default IconList