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
              style={{minWidth: 'unset', width: '100%', maxHeight: item.hasOwnProperty('height') ? `${item.height}px` : ``}}
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
  const { type, name, question, isVisible, clickHandler, nextBtnClickHandler, order, prevBtnClickHandler } = props;
  const sideStyle = isVisible ? { display: 'block' } : { display: 'none' }
  const levelData = level(question.difficulty)
  const prompt = type === 'front' ? question.prompt : question.answer;
  const media = type === 'front' 
    ? question.prompt_media.map(item => generateMedia(item))
    : question.answer_media.map(item => generateMedia(item))
  const categoryTagClass = categoryClass(name)

  return (
    <section className={type} css={Styled.Side} style={sideStyle}>
      <header className="rainbow-border">
        <div className="subheader">
          <div>
            <span className="level tag">
              <i className={`fas ${levelData.tagClass}`}></i>
              &nbsp;{levelData.text}
            </span>
          </div>
          <div><h3>
            {type === 'front' ? `${order + 1}. Question` : `${order + 1}. Answer`}
          </h3></div>
          <div>
            <span className={`category tag`}>
              <i className={`fad fa-tag ${categoryTagClass}`}></i>
              &nbsp;{name}
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
        <button onClick={prevBtnClickHandler()}>
          <i className="far fa-arrow-left"></i>
          &nbsp;&nbsp;Prev
        </button>
        {/* className="peach-bg-gradient"> */}
        <button onClick={clickHandler()} className='rainbow-text'>
          <i className="far fa-sync-alt rainbow-text"></i>
          Flip
        </button>
        <button onClick={nextBtnClickHandler()}>
          Next&nbsp;
          <i className="far fa-arrow-right"></i>
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