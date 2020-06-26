import React from 'react'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import SectionTitle from './partials/SectionTitle'
import Intro from './partials/Intro'
import Service from './partials/Service'
import LatestPost from './partials/LatestPost'
import IconList from '../IconList/IconList'


const AboutMe = ({ ...data }) => {
  const posts = (
    data.pageContext.posts.map(obj => {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(obj.node.published).toLocaleDateString(undefined, options)
      return <LatestPost post={obj.node} date={date} key={obj.node.published}/>
    })
  )

  return (
    
    <Layout>
      <Header />
      <SEO stitle="About Me" />
      <Styled.Container>
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-8">
            <SectionTitle
              text="A Little About Me"
              icon="fa fad fa-user-cowboy"
            />
            <Intro />
          </div>

          <div className="col-sm-12 col-md-5 col-lg-4">
            <SectionTitle
              text="Around the Internet"
              icon="fa far fa-browser"
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
                  icon: 'fab fa-linkedin',
                  link: 'https://linkedin.com/cristinoconnor',
                  text: 'LinkedIn'
                }
              ]} 
            />
          </div>
        </div>

        <SectionTitle text="Services" icon="fa fal fa-concierge-bell"/>
        <div className="row">
          <Service
            color="color1"
            icon="far fa-code"
            title="Web Development"
            text="This is my strongest area. I have over 10 years of experience in the field."
          />
          <Service
            color="color2"
            icon="far fa-graduation-cap"
            title="Code Tutoring"
            text="I'm extremely friendly, I love teaching and I can work with all ages."
          />
          <Service
            color="color3"
            icon="far fa-i-cursor"
            title="Blog Writer"
            text="I believe it's important to contribute to the web development community."
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

        {/* <SectionTitle
          text="Tweets"
          icon="fa icon-twitter"
        /> */}
        {/* <div className="row">
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
        </div> */}
      </Styled.Container>
    </Layout>
  )
}

export default AboutMe


