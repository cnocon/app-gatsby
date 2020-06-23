import React, { useEffect } from 'react'
import { RotateWords, RotateWordsWrapper } from '../AboutMe.styles'
import $ from 'jquery'

const Intro = () => {
  const rotateWords = () => {
    const rotate_words = $('.rotate-words');

		if (rotate_words.length) {
      rotate_words.each(function(index, element) {
        $(element).find('span').eq(0).addClass('active');

        setInterval(function(){
          const next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;

          $(element).find('.active').addClass('rotate-out').removeClass('rotate-in active');

          $(element).find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
        }, 3000);
      });
		}
  }

  useEffect(() => {
    try {
      rotateWords()
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        rotateWords()
      }, 500)
    }

  })

  return (
    <RotateWordsWrapper>
      <RotateWords className="rotate-header">
        Hello. I'm&nbsp;
        <span className="rotate-words">
          <span className="rotate-out">a&nbsp;developer.</span>
          <span className="rotate-out">a&nbsp;teacher.</span>
          <span className="rotate-in active">an&nbsp;avid learner.</span>
        </span><br/>
        I live in Salt Lake City, UT.<br/>
        <strong>Code</strong> is my passion.<br/>
      </RotateWords>
    </RotateWordsWrapper>
  )
}

export default Intro
