import React from 'react'
import { Link } from 'gatsby'
import * as Styled from './ImageColumn.styles'


const ImageColumn = ({columnClasses, title, imageSrc, imageAlt, timestamp, date, slug, summary}) => {
  const dateEl = () => {
    if (date) {
      return <Styled.Date>{ date }</Styled.Date>
    } else {
      return null
    }
  }

  const titleEl = () => {
    if (slug) {
      return <Link to={`/articles/${slug}`}>{ title }</Link>
    } else {
      return title
    }
  }

  return (
    <div className={columnClasses} key={timestamp}>
      <Styled.ImageColumn>
        <Styled.ImageColumnHeading>
          <Styled.ImageContainer>
            <img src={imageSrc} alt={imageAlt} />
          </Styled.ImageContainer>
          { titleEl() }
          { dateEl() }
        </Styled.ImageColumnHeading>

        <p css={Styled.Paragraph}>{summary}</p>
      </Styled.ImageColumn>
    </div>
  )
}

export default ImageColumn
