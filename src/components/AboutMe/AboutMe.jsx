import React from 'react'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
// import IconList from "../IconList/IconList"
import SectionTitle from '../SectionTitle/SectionTitle'
import Intro from '../Intro/Intro'
import IconColumn from '../IconColumn/IconColumn'
import ImageColumn from '../ImageColumn/ImageColumn'
import PageTransition from '../../../plugins/gatsby-v3-plugin-page-transitions';
import getColor from "../utils/getColor"

const AboutMe = ({ ...data }) => {
  const { posts, colors } = data.pageContext
  let colorsCopy = Object.assign([], colors)

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
        key={obj.node.published} 
        color={getColor(colors, colorsCopy)} />
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
          </div>

        <SectionTitle text="Services" icon="fas fa-concierge-bell"/>
        <div className="row">
          <IconColumn
            color="blue"
            columnClasses="col-sm-6 col-md-3"
            icon="fal fa-graduation-cap"
            title="Code Tutoring"
            text="I focus on <b>teaching with compassion</b>. I love tutoring and I can work with all ages."
          />
          <IconColumn
            color="green"
            columnClasses="col-sm-6 col-md-3"
            icon="fal fa-code"
            title="Web Development"
            text="This is my primary area of expertise. I have <b>10+ years of experience</b> in the field."
          />
          <IconColumn
            color="yellow"
            columnClasses="col-sm-6 col-md-3"
            icon="fal fa-typewriter"
            title="Blog Writer"
            text="I believe it's important to <b>share and contribute</b> content to the developer community."
          />
          <IconColumn
            color="purple"
            columnClasses="col-sm-6 col-md-3"
            icon="fal fa-project-diagram"
            title="Project Management"
            text="I have strong <b>project management</b> skills and can self-manage well as needed."
          />
        </div> 



        <SectionTitle
          text="Latest from the Blog"
          icon="fas fa-rss"
        />
        <div className="row">{articles}</div>

        {/* <div className="row">    
          <div className="col-sm-12">
            <SectionTitle
                text="Profiles"
                icon="fal fa-id-card"
            />
            <IconList listItems={[
                {
                  icon: 'fab fa-codepen',
                  link: 'https://codepen.io/cnocon',
                  text: 'CodePen'
                },
                {
                  icon: 'fab fa-github',
                  link: 'https://github.com/cnocon',
                  text: 'GitHub'
                },
                {
                  icon: 'fab fa-twitter',
                  link: 'https://twitter.com/cnocon',
                  text: 'Twitter'
                },
                {
                  icon: 'fab fa-linkedin-in',
                  link: 'https://www.linkedin.com/in/cristinoconnor',
                  text: 'LinkedIn'
                },
                {
                  icon: 'fab fa-stack-overflow',
                  link: 'https://stackoverflow.com/users/2187039/cnocon',
                  text: 'Stack Overflow'
                }
              ]} 
            />
          </div> 
        </div> */}


        </Styled.Container>
      </PageTransition>
    </Layout>
  )
}

export default AboutMe


