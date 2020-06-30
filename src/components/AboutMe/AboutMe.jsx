import React from 'react'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import SectionTitle from './partials/SectionTitle/SectionTitle'
import Intro from './partials/Intro/Intro'
import Service from './partials/Service/Service'
import LatestPost from './partials/LatestPost/LatestPost'
import PageTransition from '../../../plugins/gatsby-v3-plugin-page-transitions';
import getColor from "../utils/getColor"

const AboutMe = ({ ...data }) => {
  const { posts, colors } = data.pageContext
  let colorsCopy = Object.assign([], colors)

  const articles = (
    posts.map((obj, i) => {
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(obj.node.published).toLocaleDateString(undefined, options)
      return <LatestPost post={obj.node} date={date} key={obj.node.published} color={getColor(colors, colorsCopy)} />
    })
  )

  return (
    
    <Layout>
      <Header />
      <SEO stitle="Home" />
      <PageTransition>
        <Styled.Container>
          <div className="row">
            <div className="col-sm-12">
              <SectionTitle
                text="A Little About Me"
                icon="fas fa-female"
              />
              <Intro />
            </div>

            {/* <div className="col-sm-12 col-md-5 col-lg-4">
              <SectionTitle
                text="Profiles"
                icon="fal fa-id-card"
              />
              <IconList listItems={[
                  {
                    icon: 'fab fa-github',
                    link: 'https://github.com/cnocon',
                    text: 'Github'
                  },
                  {
                    icon: 'fab fa-codepen',
                    link: 'https://codepen.io/cnocon',
                    text: 'Codepen'
                  },
                  {
                    icon: 'fab fa-twitter',
                    link: 'https://twitter.com/cnocon',
                    text: 'Twitter'
                  },
                  {
                    icon: 'fab fa-linkedin-in',
                    link: 'https://linkedin.com/cristinoconnor',
                    text: 'LinkedIn'
                  }
                ]} 
              />
            </div> */}
          </div>

          <SectionTitle text="Services" icon="fas fa-concierge-bell"/>
        <div className="row">
          <Service
            color="color2"
            icon="fal fa-graduation-cap"
            title="Code Tutoring"
            classes="box-shadow-blue"
            text="I focus on <b>teaching with compassion</b>. I love tutoring and I can work with all ages."
          />
          <Service
            color="color1"
            icon="fal fa-code"
            title="Web Development"
            classes="box-shadow-green"
            text="This is my primary area of expertise. I have over <b>10 years of experience</b> in the field."
          />
          <Service
            color="color3"
            icon="fal fa-typewriter"
            classes="box-shadow-yellow"
            title="Blog Writer"
            text="I believe it's important to <b>share and contribute</b> content to the developer community."
          />
          <Service
            color="color4"
            icon="fal fa-project-diagram"
            title="Project Management"
            classes="box-shadow-red"
            text="I have <b>strong project management</b> skills and can self-manage well as needed."
          />
        </div> 


          <SectionTitle
            text="Latest from the Blog"
            icon="fas fa-rss"
          />
          <div className="row">{articles}</div>
        


        </Styled.Container>
      </PageTransition>
    </Layout>
  )
}

export default AboutMe


