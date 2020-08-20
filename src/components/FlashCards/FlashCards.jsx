import React from 'react'
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import FlashCard from "../FlashCard/FlashCard"
import Layout from "../Layout/Layout"
import * as Styled from "./FlashCards.styles"

const FlashCards = ({ ...data }) => {
  const { flashCardsData } = data.pageContext;

  const cardData = Object.values(flashCardsData).map((object, i) => {
    const { _id, name, slug } = object.category
    return object.categoryQuestions.questions.map(question => {
      return {id: _id, name: name, slug: slug, question: question}
    })
  }).flat()

  const cards = cardData.map((card, i) => {
    const { id, name, slug, question } = card
    const visible = true
    return <FlashCard key={`${question._id}-${i}`} id={id} question={question} slug={slug} visible={visible} name={name} />
  });
  
  return (
    <Layout>
      <Header />
      <SEO stitle='F.E.D. Flash Cards' sdescription='F.E.D. (Front End Development) Flash Cards App' slug="flash-cards"/>
      <div className="row">
        <div className="col-sm-12 col-lg-9" css={Styled.FlashCards}>
          { cards }
        </div>
      </div>
    </Layout>
  );
};

export default FlashCards;