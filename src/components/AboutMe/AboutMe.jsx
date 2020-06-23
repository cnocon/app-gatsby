import React, { useEffect } from 'react'
// import { Link } from 'gatsby'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import SectionTitle from './partials/SectionTitle'

import Intro from './partials/Intro'
import Service from './partials/Service'
import LatestPost from './partials/LatestPost'
import Theme from '../Theme/Theme'


const styleTweet = (tweetEl) => {
  // Update border to match site theme
  tweetEl.style.border = `4px solid ${Theme.colors.grays.border}`
  tweetEl.style.minWidth = `270px`
  tweetEl.style.maxWidth = `500px`
  tweetEl.style.width = `85%`
  tweetEl.style.overflow = `hidden`
  tweetEl.style.margin = `0 auto`

  // Find top level shadow DOM node
  const shadowEl = tweetEl.shadowRoot

  // Find and style container
  const node = shadowEl.childNodes[1].childNodes[0]
  node.style.border = `0`

  // Set CTA to default color
  const cta = shadowEl.childNodes[1].querySelector('.CallToAction')
  const ctaText = cta.querySelector('.CallToAction-text')
  ctaText.style.color = `${Theme.colors.blue.base}`
  ctaText.style.fontWeight = `400`

  // Get and style the footer icon
  const ctaIcon = cta.querySelector('.CallToAction-icon')
  ctaIcon.style.display = 'none'

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
  const authorLink = content.children[0].querySelector('.TweetAuthor-link')
  author.style.fontWeight = '900'
  author.style.textTransform = 'uppercase'

  authorLink.addEventListener('mouseover', () => {
    authorLink.style.color = `${Theme.colors.blue.base} !important`
    authorLink.style.textDecoration = `underline !important`
  })
}

const AboutMe = ({ ...data }) => {
  const posts = (
    data.pageContext.posts.reverse().map(obj => {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(obj.node.published).toLocaleDateString(undefined, options)
      return <LatestPost post={obj.node} date={date} key={obj.node.published}/>
    })
  )

  useEffect(() => {
    setTimeout(() => {
      const tweetEl = document.querySelector('.twitter-tweet-rendered');
      styleTweet(tweetEl)
    }, 1000)
  })

  return (
    <Layout>
      <TopBar pageHeader="About Me" breadcrumbs={null}/>
      <Header />
      <SEO stitle="About Me" />
      <Styled.Container>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <SectionTitle
              text="A Little About Me"
              icon="fa fad fa-user-cowboy"
            />
            <Intro />
          </div>

          <div className="col-sm-12 col-md-6">

          <SectionTitle
              text="Tweets"
              icon="fa icon-twitter"
            />
            <div style={{marginLeft: `61px`}}>
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  This thread is keeping me going today.{` `}
                  <a href="https://t.co/AmzaEul99S">https://t.co/AmzaEul99S</a>
                </p>
                &mdash; Cristin O&#39;Connor (@cnocon){` `}
                <a href="https://twitter.com/cnocon/status/1251555080739803136?ref_src=twsrc%5Etfw">April 18, 2020</a>
              </blockquote>
            </div>
          </div>
        </div>

        <SectionTitle
          text="Latest from the Blog"
          icon="fa fas fa-rss"
        />
        <div className="row">{posts}</div>
        <SectionTitle text="Services" icon="fa fal fa-concierge-bell"/>
        <div className="row">
          <Service
            color="color1"
            icon="far fa-code"
            title="Web Development &amp; Design"
            text="Web development is my strongest area, but I've learned a lot about design over the years."
          />
          <Service
            color="color2"
            icon="far fa-graduation-cap"
            title="Code Tutoring"
            text="I love teaching almost as much as I love learning, myself. I'm an experienced, friendly tutor who can work with all ages."
          />
          <Service
            color="color3"
            icon="far fa-i-cursor"
            title="Blog Writer"
            text="I believe it's important to contribute to the web development community. I write educational blog posts targeted at beginners."
          />
          <Service
            color="color4"
            icon="far fa-tasks"
            title="Project Management"
            text="I have strong project management skills and can self-manage, or manage others as needed."
          />
        </div>
      </Styled.Container>
    </Layout>
  )
}

export default AboutMe


