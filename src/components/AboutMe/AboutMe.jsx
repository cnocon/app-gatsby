import React, { useEffect } from 'react'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import SectionTitle from './partials/SectionTitle'

import Intro from './partials/Intro'
import Service from './partials/Service'
import LatestPost from './partials/LatestPost'
import styledTweet from "./partials/styledTweet"

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
      const tweetEls = document.querySelectorAll('.twitter-tweet-rendered');
      tweetEls.forEach(tweetEl => styledTweet(tweetEl))
    }, 1500)
  })

  return (
    <Layout>
      <TopBar pageHeader="About Me" breadcrumbs={null}/>
      <Header />
      <SEO stitle="About Me" />
      <Styled.Container>
        <div className="row">
          <div className="col-sm-12">
            <SectionTitle
              text="A Little About Me"
              icon="fa fad fa-user-cowboy"
            />
            <Intro />
          </div>
        </div>

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

        <SectionTitle
          text="Latest from the Blog"
          icon="fa fas fa-rss"
        />
        <div className="row">{posts}</div>

        <SectionTitle
          text="Tweets"
          icon="fa icon-twitter"
        />
        <div className="row">
          <Styled.HalfColumn className="col-sm-12 col-md-6">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Everyone should be as nice to themselves as they are to dogs.
              </p>
              &mdash;{` `}Cristin O&#39;Connor{` `}(@cnocon){` `}
              <a href="https://twitter.com/cnocon/status/1251752798737199104?ref_src=twsrc%5Etfw">
                April 19, 2020
              </a>
            </blockquote>
          </Styled.HalfColumn>
          <Styled.HalfColumn className="col-sm-12 col-md-6">
            <div>
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  This thread is keeping me going today.{` `}
                  <a href="https://t.co/AmzaEul99S">https://t.co/AmzaEul99S</a>
                </p>
                &mdash; Cristin O&#39;Connor (@cnocon){` `}
                <a href="https://twitter.com/cnocon/status/1251555080739803136?ref_src=twsrc%5Etfw">April 18, 2020</a>
              </blockquote>
            </div>
          </Styled.HalfColumn>
        </div>
      </Styled.Container>
    </Layout>
  )
}

export default AboutMe


