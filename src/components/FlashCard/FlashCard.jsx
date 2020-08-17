import React, { useState } from 'react'
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
  const [ visible, setVisible ] = useState(props.visible);

  const generateAnswerMedia = item => {
    switch (item.type) {
      case 'image':
        return <img 
          src={item.url}
          alt={item.desc} 
          style={{width: `${item.width}px`}}
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

  const answerMedia = question.answer_media.map(item => {
    return generateAnswerMedia(item);
  });

  const style = visible ? {display: 'block'} : { display: 'none'};

  return (
    <div className="flashcard" style={style} css={Styled.Card}>
      <SEO stitle='Sandbox' sdescription='Testing out the Q-and-API API I built using Node and Express' slug="sandbox">
        <script defer async src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=doxy"></script>
      </SEO>
      {/* <img src={imgPath} width={300} alt="" role="presentation"/> */}
      {/* <EmbeddedGist gist={`cnocon/25c10c5a228ef004de9ca54fe64f7411`} /> */}
      {/* <h4>Prompt:</h4> {ReactHtmlParser(test.prompt)} */}
      {/* <h4>Answer:</h4> {ReactHtmlParser(test.answer)} */}

      <section className="front">
        <header>
          <h2>Question</h2>
          <h4>Category: {name}</h4>
        </header>
        {ReactHtmlParser(question.prompt)}
        <footer><h5>Difficulty: {question.difficulty}/10</h5></footer>
      </section>

      <section className="back">
        <header>
          <h2>Answer</h2>
          <h4>Category: {name}</h4>
        </header>
        {ReactHtmlParser(question.answer)}
        {answerMedia}
        <footer><h5>Difficulty: {question.difficulty}/10</h5></footer>
      </section>
      
      
    </div>
  );
};

export default FlashCard;