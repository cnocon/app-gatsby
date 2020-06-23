import React from 'react'
// import { Link } from 'gatsby'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import SectionTitle from './partials/SectionTitle'
import Tweet from './partials/Tweet'
import Intro from './partials/Intro'
import Service from './partials/Service'
import LatestPost from './partials/LatestPost'

const AboutMe = ({ ...data }) => {
  const posts = (
    data.pageContext.posts.reverse().map(obj => {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(obj.node.published).toLocaleDateString(undefined, options)
      return <LatestPost post={obj.node} date={date} key={obj.node.published}/>
    })
  )

  return (
    <Layout>
      <TopBar pageHeader="About Me" breadcrumbs={null}/>
      <Header />
      <SEO stitle="About Me" />
      <Styled.Container>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <SectionTitle
              text="A Little About Me"
              icon="fa fad fa-user-cowboy"
            />
            <Intro />
          </div>

          <div className="col-md-6 col-sm-12">
            <SectionTitle
              text="Tweets"
              icon="fa icon-twitter"
            />
            <Tweet />
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


