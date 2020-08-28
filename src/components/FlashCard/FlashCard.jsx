// , useEffect
import React from 'react'
import Side from './Side'
import * as Styled from './FlashCard.styles'

const FlashCard = ({...props}) => {
  const { question, name, nextClickHandler, isFrontVisible, flipClickHandler, order, prevClickHandler } = props.data

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
       prevBtnClickHandler={prevClickHandler}
       clickHandler={flipClickHandler}
       question={question}
       name={name}
       order={order} />
      <Side
        type="back"
        isVisible={!isFrontVisible}
        key={`back-${question._id}`}
        prevBtnClickHandler={prevClickHandler}
        nextBtnClickHandler={nextClickHandler}
        clickHandler={flipClickHandler}
        question={question}
        name={name}
        order={order} />
    </div>
  );
};

export default FlashCard;