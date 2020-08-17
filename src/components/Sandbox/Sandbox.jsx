import React from 'react'
import EmbeddedGist from '../EmbeddedGist/EmbeddedGist'
import Layout from "../Layout/Layout"
import ReactHtmlParser from 'react-html-parser'
import SEO from "../SEO/seo"
import Header from "../Header/Header"
// import IconList from "../IconList/IconList"
// import SectionTitle from '../SectionTitle/SectionTitle'
// import IconColumn from '../IconColumn/IconColumn'
// import ImageColumn from '../ImageColumn/ImageColumn'
// import PageTransition from '../../../plugins/gatsby-v3-plugin-page-transitions';

const Sandbox = ({ ...data }) => {
  const { sandboxData } = data.pageContext;
  console.log(sandboxData);
  // const imgPath = sandboxData[3].questions[1].answer_media[0].image;
  // const gistPath = sandboxData[0].questions[2].answer_media[0].gist;
  // const test = sandboxData[0].questions[0];
  // console.log(sandboxData);
  return (
    <Layout>
      <Header />
      <SEO stitle="API Sandbox" robots="noindex"/>
      <div className="row">
        <div className="col-sm-12">
          {/* <img src={imgPath} width={300} alt="" role="presentation"/> */}
          {/* <EmbeddedGist gist={`cnocon/25c10c5a228ef004de9ca54fe64f7411`} /> */}
          {/* <h4>Prompt:</h4> {ReactHtmlParser(test.prompt)} */}
          {/* <h4>Answer:</h4> {ReactHtmlParser(test.answer)} */}
        </div>
      </div>
    </Layout>
  );
};

export default Sandbox;