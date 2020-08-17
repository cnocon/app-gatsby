import React, { useState, useEffect } from 'react'
import EmbeddedGist from '../EmbeddedGist/EmbeddedGist'
import ReactHtmlParser from 'react-html-parser'
import * as Styled from './FlashCard.styles'
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
  const { question, name } = props;
  const [ frontVisible, setFrontVisible ] = useState(true);

  const generateMedia = item => {
    switch (item.type) {
      case 'image':
        return <img 
          src={item.url}
          alt={item.desc} 
          style={{minWidth: `${item.width}px`, maxWidth: '100%'}}
          key={item.url} />;
      case 'gist':
        return <EmbeddedGist gist={item.gist} key={item.id}/>;
      case 'snippet':
        console.log(item);
        return <Snippet item={item} key={Math.random()} />;
      default:
        // do nothing
    }
  }

  const answerMedia = question.answer_media.map(item => generateMedia(item));
  const questionMedia = question.prompt_media.map(item => generateMedia(item));
  const frontStyle = frontVisible ? {display: 'block'} : { display: 'none'};
  const backStyle = !frontVisible ? {display: 'block'} : { display: 'none'};

  useEffect(() => {}, [frontVisible]);

  return (
    <div className="flashcard" css={Styled.Card}>
      <section className="front" style={frontStyle}>
        <header>
          <h2>Question</h2>
          <h4>Category: {name}</h4>
          <h5>Difficulty: {question.difficulty}/10</h5>
        </header>
        {ReactHtmlParser(question.prompt)}
        <br/>
        <br/>
        {questionMedia}
        <footer>
        <button onClick={() => setFrontVisible(false)}>Flip Card</button>
        </footer>
        {frontVisible ?
          <SEO stitle='Sandbox' sdescription='Testing out the Q-and-API API I built using Node and Express' slug="sandbox" frontVisible={frontVisible}>
            <script defer async src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
          </SEO>
          : null }
      </section>

      <section className="back" style={backStyle}>
        <header>
          <h2>Answer</h2>
          <h4>Category: {name}</h4>
          <h5>Difficulty: {question.difficulty}/10</h5>
        </header>
        {ReactHtmlParser(question.answer)}
        <br/>
        <br/>
        {answerMedia}
        <footer>
          <button onClick={() => setFrontVisible(true)}>Flip Card</button>
        </footer>
        {!frontVisible ?
          <SEO stitle='Sandbox' sdescription='Testing out the Q-and-API API I built using Node and Express' slug="sandbox" frontVisible={frontVisible}>
            <script defer async src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
          </SEO>
          : null }
      </section>
    </div>
  );
};

export default FlashCard;