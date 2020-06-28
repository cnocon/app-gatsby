import React, { useEffect } from 'react'
import { RotateWords, RotateWordsWrapper } from './Intro.styles'
import $ from 'jquery'

const Intro = () => {
  const rotateWords = () => {
    var rotate_words = $('.rotate-words');
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
    rotateWords();
  }, [])

  return (
    <RotateWordsWrapper>
      <RotateWords className="rotate-header">
        I'm&nbsp;
        <span className="rotate-words">
          <span className="rotate-in active">a&nbsp;web developer.</span>
          {/* <span className="">a&nbsp;tutor &amp; teacher.</span> */}
          {/* <span className="">a&nbsp; note taker.</span> */}
          <span className="">a casual designer.</span>
          <span className="">an animal lover.</span>
          <span className="">an avid learner.</span>
        </span>
        <br/>
        I live in beautiful Utah.<br/>
        I <strong>love</strong> to write code.<br/>
      </RotateWords>
    </RotateWordsWrapper>
  )
}

export default Intro
