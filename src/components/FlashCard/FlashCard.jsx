// , useEffect
import React, { useState, useEffect } from 'react'
import Side from './Side'
import * as Styled from './FlashCard.styles'

const FlashCard = ({...props}) => {
  const { question, name } = props;
  const [frontVisible, setFrontVisible] = useState(true)
  // let frontEl = null
  // let backEl = null
  // const [minHeight, setMinHeight] = useState('0px')
  
  const handleFlipClick = () => {
    setFrontVisible(prevFrontVisible => !prevFrontVisible)
  }
  
  // useEffect(() => {
  //   const frontMinHeight = frontEl.current.offsetHeight;
  //   const backMinHeight = backEl.current.offsetHeight;

  //   if (frontMinHeight > backMinHeight) {
  //     setMinHeight(`${frontMinHeight}px`)
  //   } else {
  //     setMinHeight(`${backMinHeight}px`)
  //   }
  // }, [minHeight])

  return (
    <div 
      className="flashcard" 
      css={Styled.Card} 
    >
      <Side clickHandler={handleFlipClick} type="front" question={question} name={name} key={`front-${question._id}`} isVisible={frontVisible} />
      <Side clickHandler={handleFlipClick} type="back" question={question} name={name} key={`back-${question._id}`} isVisible={!frontVisible} />
    </div>
  );
};

export default FlashCard;