import React from 'react'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import IconList from "../IconList/IconList"
import SectionTitle from '../SectionTitle/SectionTitle'
import Intro from '../Intro/Intro'
import IconColumn from '../IconColumn/IconColumn'
import ImageColumn from '../ImageColumn/ImageColumn'
import PageTransition from '../../../plugins/gatsby-v3-plugin-page-transitions';

const AboutMe = ({ ...data }) => {
  const { posts } = data.pageContext

  const articles = (
    posts.map((obj, i) => {
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(obj.node.published).toLocaleDateString(undefined, options)
      const post = obj.node
      return <ImageColumn 
        columnClasses='col-sm-12 col-md-6 col-lg-4'
        title={post.title}
        imageSrc={post.featured_image}
        imageAlt={post.featured_image_alt}
        timestamp={post.published} 
        slug={post.slug}
        summary={post.summary}
        date={date} 
        key={obj.node.published} />
    })
  )

  return (
    <Layout>
      <Header />
      <SEO stitle="Cristin O'Connor | Front End Developer" />
      <PageTransition>
        <Styled.Container>
          <div className="row">
            <div className="col-sm-12">
              <SectionTitle
                text="A Little About Me"
                icon="fal fa-user-astronaut"
              />
              <Intro />
            </div>
          </div>


          <SectionTitle text="Services" icon="fas fa-concierge-bell"/>
          <div className="row">
            <IconColumn
              columnClasses="col-sm-6 col-md-3"
              icon="fal fa-graduation-cap"
              title="Code Tutoring"
              classes='rainbow-box-shadow-rounded rainbow-icon-narrow dark'
              text="I focus on <b>teaching with compassion</b>. I love tutoring and I can work with all ages. <a href='mailto:her@cristin.io' class=
              rainbow-box-shadow'>Contact me about tutoring</a>."
            />
            <IconColumn
              columnClasses="col-sm-6 col-md-3"
              icon="fal fa-code"
              title="Web Development"
              classes='rainbow-box-shadow-rounded rainbow-icon-narrow dark'
              text="This is my primary area of expertise. I have <b>10+ years of experience</b> in the field."
            />
            <IconColumn
              columnClasses="col-sm-6 col-md-3"
              icon="fal fa-typewriter"
              title="Blog Writer"
              classes='rainbow-box-shadow-rounded rainbow-icon-narrow dark'
              text="I believe it's important to <b>share and contribute</b> content to the developer community."
            />
            <IconColumn
              columnClasses="col-sm-6 col-md-3"
              icon="fal fa-project-diagram"
              title="Project Management"
              classes='rainbow-box-shadow-rounded rainbow-icon-narrow dark'
              text="I have strong <b>project management</b> skills and can self-manage well as needed."
            />
          </div> 


          <SectionTitle text="Latest from the Blog" icon="fas fa-rss" />
          <div className="row">{articles}</div>

              <SectionTitle
                text="Connect"
                icon="fal fa-handshake"
              />
              <IconList 
                classes='' 
                listItems={[
                {
                  icon: 'fab fa-codepen',
                  link: 'https://codepen.io/cnocon',
                  text: 'CodePen',
                  classes: 'rainbow-box-shadow-rounded'
                },
                {
                  icon: 'fab fa-github',
                  link: 'https://github.com/cnocon',
                  text: 'GitHub',
                  classes: 'rainbow-box-shadow-rounded'
                },
                {
                  icon: 'fal fa-hashtag',
                  link: 'https://twitter.com/cnocon',
                  text: 'Twitter',
                  classes: 'rainbow-box-shadow-rounded'
                },
                {
                  icon: 'fab fa-linkedin-in',
                  link: 'https://www.linkedin.com/in/cristinoconnor',
                  text: 'LinkedIn',
                  classes: 'rainbow-box-shadow-rounded'
                },
                {
                  icon: 'fab fa-stack-overflow',
                  link: 'https://stackoverflow.com/users/2187039/cnocon',
                  text: 'Stack Overflow',
                  classes: 'rainbow-box-shadow-rounded'
                },
                {
                  icon: 'fal fa-envelope',
                  link: 'mailto:her@cristin.io',
                  text: 'Email',
                  classes: 'rainbow-box-shadow-rounded'
                }
              ]} 
            />
        </Styled.Container>
      </PageTransition>
    </Layout>
  )
}

export default AboutMe


