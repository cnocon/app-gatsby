// , { useState, useEffect }
import React from 'react'
import EmbeddedGist from '../EmbeddedGist/EmbeddedGist'
import ReactHtmlParser from 'react-html-parser'
import * as Styled from './Side.styles'
import SEO from "../SEO/seo"
// import { useEffect } from 'react'

const Snippet = ({item}) => {
  const { lines, lang } = item;
  const compiledLines = lines.map(line => line).join("\n");

  return (
    <pre className="prettyprint"><code className={`lang-${lang}`}>
      {ReactHtmlParser(compiledLines)}
    </code></pre>
  )
}

const generateMedia = item => {
  switch (item.type) {
    case 'image':
      return (
        <div className="img-container-outer" key={item.url}>
          <div className='img-container'key={item.url} >
            <img 
              src={item.url}
              alt={item.desc}
              width={`${item.hasOwnProperty('width') ? item.width : '100%'}`}
            />
          </div>
          <p className="image-note">Swipe or scroll to see rest of image.</p>
        </div>
      )
    case 'gist':
      return <EmbeddedGist gist={item.gist} key={item.id}/>;
    case 'snippet':
      return <Snippet item={item} key={Math.random()} />;
    default:
      // do nothing
  }
}

const level = difficulty => {
  if (difficulty <= 3) {
    return {
      text: 'Easy',
      tagClass: 'fa-tachometer-slowest'
    }
  } else if (difficulty > 7) {
    return {
      tagClass: 'fa-tachometer-fastest', 
      text: 'Hard'
    } 
  }
  return {
    tagClass: 'fa-tachometer-average',
    text: 'Mid-Level'
  } 
}

const categoryClass = category => {
  const yellowTags = ['Performance']
  const purpleTags = ['Gatsby']
  const royalBlueTags = ['React']
  const blueTags = ['JavaScript']
  const greenTags = ['Node']
  const redTags = ['CSS']
  const orangeTags = ['Git']

  if (yellowTags.includes(category)) {
    return 'yellow'
  } else if (purpleTags.includes(category)) {
    return 'purple'
  } else if (blueTags.includes(category)) {
    return 'blue'
  } else if (greenTags.includes(category)) {
    return 'green'
  } else if (redTags.includes(category)) {
    return 'red'
  } else if (orangeTags.includes(category)) {
    return 'orange'
  } else if (royalBlueTags.includes(category)) {
    return 'royal-blue'
  }
}

const FlashCard = ({...props}) => {
  const { type, name, question, isVisible, clickHandler, nextBtnClickHandler } = props;
  const sideStyle = isVisible ? { display: 'block' } : { display: 'none' }
  const levelData = level(question.difficulty)
  const prompt = type === 'front' ? question.prompt : question.answer;
  const media = type === 'front' 
    ? question.prompt_media.map(item => generateMedia(item))
    : question.answer_media.map(item => generateMedia(item))
  const categoryTagClass = categoryClass(name)

  return (
    <section className={type} css={Styled.Side} style={sideStyle}>
      <header>
        <div className="subheader">
          <div>
            <span className="level tag rainbow-box-shadow">
              {levelData.text}
              <i className={`fal ${levelData.tagClass}`}></i>
            </span>
          </div>
          <h3 className="rainbow-border">{type === 'front' ? 'Question' : 'Answer'}</h3>
          <div>
            <span className={`category rainbow-box-shadow tag`}>
              <i className={`fas fa-tag ${categoryTagClass}`}></i>
              {name}
            </span>
          </div>
        </div>
      </header>
      <section>
        <div className="section-inner">
          <div className="prompt">
            { ReactHtmlParser(prompt) }
            <div className="media">{ media }</div>
          </div>
        </div>
      </section>
      <footer>
        {/* <i className="fas fa-question"></i> */}
        <button onClick={clickHandler()}>
          {/* {type === 'front' ? 'See Answer' : 'See Question'} */}
          <i className="far fa-sync-alt rainbow-text"></i>&nbsp;&nbsp;
          Flip
        </button>
        <button onClick={nextBtnClickHandler()}>
          {type === 'front' ? 'Skip' : 'Next'}&nbsp;&nbsp;
          <i className="fas fa-forward rainbow-text"></i>
        </button>
      </footer>
      {isVisible ?
        <SEO stitle='F.E.D. Flash Cards' sdescription='F.E.D. (Front End Development) Flash Cards App' slug="flash-cards">
          <script defer async src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
        </SEO>
        : null }
    </section>
  );
};

export default FlashCard;