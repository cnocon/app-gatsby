import React, { useState, useEffect } from 'react'
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import FlashCard from "../FlashCard/FlashCard"
import Rule from "../Rule/Rule"
import Layout from "../Layout/Layout"
import * as Styled from "./FlashCards.styles"

const FlashCards = ({ ...data }) => {
  const { flashCardsData } = data.pageContext;
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFrontVisible, setIsFrontVisible] = useState(true)

  const cardData = Object.values(flashCardsData).map((object, i) => {
    const { _id, name, slug } = object.category

    return object.categoryQuestions.questions.map(question => {
      return {id: _id, name: name, slug: slug, question: question}
    })
  }).flat()

  const handleNextClick = () => {
    setIsFrontVisible(true)
    setActiveIndex(prevActiveIndex => prevActiveIndex + 1 >= cardData.length ? 0 : prevActiveIndex + 1)
  }

  const handleFlipClick = () => {
    setIsFrontVisible(prevIsFrontVisible => !prevIsFrontVisible)
  }

  const handlePrevClick = () => {
    setIsFrontVisible(true)
    setActiveIndex(prevActiveIndex => {
      return ((prevActiveIndex - 1 >= 0) ? prevActiveIndex - 1 : cardData.length - 1)
    })
  }

  const cardsProps = cardData.map((card, i) => {
    const { id, name, slug, question } = card

    return ({ 
        key: `${question._id}-${i}`,
        id: id,
        question: question,
        slug: slug,
        name: name,
        order: i,
        isFrontVisible: isFrontVisible,
        prevClickHandler: () => handlePrevClick,
        nextClickHandler: () => handleNextClick,
        flipClickHandler: () => handleFlipClick
      })
  });

  useEffect(() => {
    // setCurrentData(cardsProps[activeIndex])
  }, [])
  
  return (
    <Layout>
      <Header showLogo={false}/>
      <Rule title="Front End Development Flash Cards App" icon="fad fa-elephant" />
      <SEO stitle='Front End Flash Cards' sdescription='F.E.D. (Front End Development) Flash Cards App' slug="flash-cards"/>
      <div className="row">
        <div className="col-sm-12 col-lg-9" css={Styled.FlashCards}>
          <FlashCard data={cardsProps[activeIndex]} />
        </div>
      </div>
    </Layout>
  );
};

export default FlashCards;