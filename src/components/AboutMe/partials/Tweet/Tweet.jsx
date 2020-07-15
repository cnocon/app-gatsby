import React, { useEffect } from 'react'
import { document } from 'browser-monads';
import Theme from '../../Theme/Theme'

const styleTweet = (tweetEl) => {
  // Update border to match site theme
  tweetEl.style.border = `4px solid ${Theme.colors.grays.border}`
  tweetEl.style.minWidth = `250px`
  tweetEl.style.maxWidth = `500px`
  tweetEl.style.width = `85%`
  tweetEl.style.overflow = `hidden`
  tweetEl.style.margin = `0 0 0 61px`

  // Find top level shadow DOM node
  const shadowEl = tweetEl.shadowRoot

  // Set CTA to default color
  const cta = shadowEl.childNodes[1].querySelector('.CallToAction')
  const ctaText = cta.querySelector('.CallToAction-text')
  ctaText.style.color = `${Theme.colors.blue.base}`
  ctaText.style.fontWeight = `400`

  // Get and style the footer icon
  const ctaIcon = cta.querySelector('.CallToAction-icon')
  ctaIcon.style.display = 'none'

  // Find and style container
  const node = shadowEl.childNodes[1].childNodes[0]
  node.style.border = `0`

  // Get and style the header icon
  const twitterIcon = node.querySelector('.Icon--twitter ')
  twitterIcon.style.display = 'none'

  // Get tweet content element
  const content = node.childNodes[1].childNodes[1].childNodes[1]
  content.style.fontFamily = 'Lato, sans-serif'
  content.style.fontSize = `14px`
  content.style.lineHeight = `18px`

  // Get and style links in post
  const link = content.querySelector('.link.customisable')
  link.style.color = `${Theme.colors.blue.base}`
  link.style.fontWeight = `400`

  // Get tweet header element
  const author = content.children[0].querySelector('.TweetAuthor-name')
  author.style.fontWeight = '900'
  author.style.textTransform = 'uppercase'
}

const Tweet =() => {
  useEffect(() => {
    try {
      setTimeout(() => {
        const tweetEl = document.querySelector('.twitter-tweet');
        styleTweet(tweetEl)
      }, 2000)
    } catch (e) {
      setTimeout(() => {
        const tweetEl = document.querySelector('.twitter-tweet');
        styleTweet(tweetEl)
      }, 500)
    }
  }, [])

  return (
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr" style={{fontFamily: 'Oswald'}}>
        This thread is keeping me going today.&nbsp;
        <a href="https://t.co/AmzaEul99S">
          https://t.co/AmzaEul99S
        </a>
      </p>
      &mdash;&nbsp;Cristin O&#39;Connor (@cnocon)&nbsp;
      <a href="https://twitter.com/cnocon/status/1251555080739803136?ref_src=twsrc%5Etfw">April 18, 2020</a>
    </blockquote>
  )
}

export default Tweet
