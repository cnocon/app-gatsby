import React from 'react'
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import FlashCard from "../FlashCard/FlashCard"
import Layout from "../Layout/Layout"

const Sandbox = ({ ...data }) => {
  const { sandboxData } = data.pageContext;

  const cardData = Object.values(sandboxData).map((object, i) => {
    const { _id, name, slug } = object.category;
    return object.categoryQuestions.questions.map(question => {
      return {id: _id, name: name, slug: slug, question: question};
    })
  }).flat();

  const cards = cardData.map((card, i) => {
    const { id, name, slug, question } = card;
    // const visible = question.answer_media.length > 0 ? true : false;
    const visible = true;
    return <FlashCard key={i} id={id} question={question} slug={slug} visible={visible} name={name} />;
  });
  
  return (
    <Layout>
      <Header />
      <SEO stitle="API Sandbox" robots="noindex"/>
      <div className="row">
        <div className="col-sm-12">
          { cards }
        </div>
      </div>
    </Layout>
  );
};

export default Sandbox;