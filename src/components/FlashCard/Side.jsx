// , { useState, useEffect }
import React, { useEffect } from 'react'
import EmbeddedGist from '../EmbeddedGist/EmbeddedGist'
import ReactHtmlParser from 'react-html-parser'
import * as Styled from './Side.styles'
import SEO from "../SEO/seo"

const Snippet = ({item}) => {
  const { lines, lang } = item;
  const compiledLines = lines.map(line => line).join("\n");

  return (
    <pre className="prettyprint"><code className={`lang-${lang}`}>
      {ReactHtmlParser(compiledLines)}
    </code></pre>
  )
}

const FlashCard = ({...props}) => {
  const { type, name, question, isVisible, clickHandler } = props;
  const visible = isVisible
  const sideStyle = visible ? { display: 'block' } : { display: 'none' }

  const generateMedia = item => {
    switch (item.type) {
      case 'image':
        return (
          <div className="img-container-outer" key={item.url}>
            <div className='img-container'key={item.url} >
              <img 
                src={item.url}
                alt={item.desc}
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

  const level = () => {
    const score = question.difficulty;
    if (score <= 3) {
      return "Easy"
    } else if (score <= 7) {
      return "Mid-Level"
    }
    return "Hard"
  }

  const prompt = type === 'front' ? question.prompt : question.answer;
  const media = type === 'front' 
    ? question.prompt_media.map(item => generateMedia(item)) 
    : question.answer_media.map(item => generateMedia(item))

  return (
    <section className={type} css={Styled.Side} style={sideStyle}>
      <header>
        <div className="subheader">
          <span className="level tag">{level()}</span>
          <h3>{type === 'front' ? 'Question' : 'Answer'}</h3>
          <span className="category tag">{name}</span>
        </div>
      </header>
      <section>
        <div className="section-inner">
          { ReactHtmlParser(prompt) }
          { media }
        </div>
      </section>
      <footer>
        <button onClick={() => clickHandler()}>{type === 'front' ? 'Show Answer' : 'Show Question'}</button>
      </footer>
      {visible ?
        <SEO stitle='F.E.D. Flash Cards' sdescription='F.E.D. (Front End Development) Flash Cards App' slug="flash-cards">
          <script defer async src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
        </SEO>
        : null }
    </section>
  );
};

export default FlashCard;