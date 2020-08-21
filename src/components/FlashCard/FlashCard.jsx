// , useEffect
import React, { useState, useEffect } from 'react'
import Side from './Side'
import * as Styled from './FlashCard.styles'

const FlashCard = ({...props}) => {
  console.log('props', props)
  const { question, name, nextClickHandler, isFrontVisible, flipClickHandler } = props.data
  // const [frontVisible, setFrontVisible] = useState(isFrontVisible)

  return (
    <div 
      className="flashcard"
      css={Styled.Card}
    >
      <Side
       type="front"
       key={`front-${question._id}`}
       isVisible={isFrontVisible}
       nextBtnClickHandler={nextClickHandler}
       clickHandler={flipClickHandler}
       question={question}
       name={name} />
      <Side
        type="back"
        isVisible={!isFrontVisible}
        key={`back-${question._id}`}
        nextBtnClickHandler={nextClickHandler}
        clickHandler={flipClickHandler}
        question={question}
        name={name} />
    </div>
  );
};

export default FlashCard;