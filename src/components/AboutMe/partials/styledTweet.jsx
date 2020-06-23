import Theme from '../../Theme/Theme'

const styledTweet = tweetEl => {
  // Update border to match site theme
  // tweetEl.style.border = `4px solid ${Theme.colors.grays.border}`
  tweetEl.style.borderRadius = `4px`
  tweetEl.style.minWidth = `270px`
  tweetEl.style.maxWidth = `500px`
  tweetEl.style.width = `85%`
  tweetEl.style.overflow = `hidden`
  tweetEl.style.margin = `0 auto`
  tweetEl.style.padding = `1.6rem`

  // Find top level shadow DOM node
  const shadowEl = tweetEl.shadowRoot

  // Find and style container
  const node = shadowEl.childNodes[1].childNodes[0]
  node.style.border = `0`
  node.style.backgroundColor = `${Theme.colors.grays.background}`

  // Set CTA to default color
  const cta = shadowEl.childNodes[1].querySelector('.CallToAction')
  cta.style.border = 0
  cta.style.display = 'none'

  // const ctaText = cta.querySelector('.CallToAction-text')
  // ctaText.style.color = `${Theme.colors.blue.base}`
  // ctaText.style.fontWeight = `400`

  // Get and style the footer icon
  // const ctaIcon = cta.querySelector('.CallToAction-icon')
  // ctaIcon.style.display = 'none'

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
  if (!!link) {
    link.style.color = `${Theme.colors.default.base}`
    link.style.boxShadow = `inset 0 -3px 0 ${Theme.colors.blue.boxShadow}`
    link.style.fontWeight = `400`
  }

  // Get tweet header element
  const author = content.children[0].querySelector('.TweetAuthor-name')
  const authorLink = content.children[0].querySelector('.TweetAuthor-link')
  author.style.fontWeight = '900'
  // author.style.textTransform = 'uppercase'

  authorLink.addEventListener('mouseover', () => {
    authorLink.style.color = `${Theme.colors.blue.base} !important`
    authorLink.style.textDecoration = `underline !important`
  })
}

export default styledTweet
