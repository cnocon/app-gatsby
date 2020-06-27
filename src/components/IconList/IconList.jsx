import React from 'react'
import IconListItem from './IconListItem'
import * as Styled from './IconListItem'

const IconList = ({ listItems }) => {
  const mappedItems = listItems.map(item => <IconListItem key={item.link} {...item} />)


  return (
    <ul css={Styled.IconList}>
      {mappedItems}
    </ul>
  )   
}

export default IconList