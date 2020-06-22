import React, { useEffect } from 'react'
import $ from 'jquery'
import * as Styled from "./AboutMe.styles"
import Layout from "../Layout/Layout"
import SEO from "../SEO/seo"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import { window, document } from 'browser-monads';

const AboutMe = ({ ...data }) => {
  const posts = (
    data.pageContext.posts.map(obj => {
      const post = obj.node
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(post.published).toLocaleDateString(undefined, options)
      return (
        <div className="col-sm-12 col-md-4" key={post.published}>
          <Styled.Testo className="testo">
            <Styled.TestoHeading>
              <Styled.Image src={post.featured_image} alt={post.featued_image_alt}></Styled.Image>
              <Styled.Link href={`/articles/${post.slug}`}>{post.title}</Styled.Link>
            </Styled.TestoHeading>
            <p style={{fontSize: '1.2rem', margin: '0', textTransform: 'uppercase'}}>{date}</p>
            <p style={{color: '#345'}}>{post.summary}</p>
          </Styled.Testo>
        </div>
      )
    })
  )

  const rotateWords = () => {
    const rotate_words = $('.rotate-words');

		if(rotate_words.length) {
      rotate_words.each(function(index, element) {
        $(element).find('span').eq(0).addClass('active');
        setInterval(function(){
          const next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
          $(element).find('.active').addClass('rotate-out').removeClass('rotate-in active');
          $(element).find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
        },3000);
      });
		}
  }

  useEffect(() => {
    rotateWords()
    document.addEventListener('ready', () => {
      window.twttr.widgets.load();
    })
    if (window.twttr) {
      window.twttr.widgets.load();
    } else {
      window.addEventListener('load', () => window.twttr.widgets.load())
    }


  }, [])

  return (
    <Layout maxWidth="96rem" width="90%">
      <TopBar pageHeader="About Me" breadcrumbs={null}/>
      <Header />
      <SEO stitle="About Me" />
      <Styled.Container>
        <div className="row">
          <div className="col-md-8 col-sm-7">
            <h2 className="section-title"><span><i className="fa icon-guest"></i>A LITTLE ABOUT ME</span></h2>
            <div className="intro" style={{textAlign: `center`, padding: `0 0 1em 0`, minHeight: `220px`}}>
              <Styled.RotateWords>
                Hello. I am&nbsp;
                <span className="rotate-words">
                  <span className="rotate-out">an animal lover.</span>
                  <span className="rotate-out">a writer.</span>
                  <span className="rotate-in active">an engineer.</span>
                  <span className="rotate-out">a fan of kindess.</span>
                </span><br/>
                I live in beautiful Salt Lake City, UT.<br/>
                I am passionated about <strong>teaching</strong> and learning.<br/>
              </Styled.RotateWords>
            </div>
          </div>
          <div className="col-md-4 col-sm-5">
            <h2 className="section-title"><span><i className="fa icon-twitter"></i>TWEETS</span></h2>
            <blockquote className="twitter-tweet" style={{minHeight: `280px`}}><p lang="en" dir="ltr">This thread is keeping me going today. <a href="https://t.co/AmzaEul99S">https://t.co/AmzaEul99S</a></p>&mdash; Cristin O&#39;Connor (@cnocon) <a href="https://twitter.com/cnocon/status/1251555080739803136?ref_src=twsrc%5Etfw">April 18, 2020</a></blockquote>
          </div>
        </div>
        <h2 className="section-title"><span><i className="fa fas fa-rss"></i>LATEST FROM THE BLOG</span></h2>
        <div className="row">
          {posts}
        </div>
        <h2 className="section-title"><span><i className="fa fa-magic"></i>SERVICES</span></h2>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="service color1"><i className="fab fa-html5"></i><p></p>
            <h4>WEB DEVELOPMENT & DESIGN</h4>
            <p>Web development is my strongest area, but I've learned a lot about design over the years.</p></div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="service color2"><i className="fas fa-chalkboard-teacher"></i><p></p>
            <h4>WEB DEVELOPMENT TUTORING</h4>
            <p>I love teaching almost as much as I love learning, myself. I'm an experienced, friendly tutor who can work with all ages.
            </p></div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="service color3"><i className="fas fa-pencil"></i><p></p>
            <h4>BLOG WRITER</h4>
            <p>I believe its important to contribute to the web development community. I write educational blog posts targeted at beginners.</p></div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="service color4"><i className="fa fa-rocket"></i><p></p>
            <h4>PROJECT MANAGEMENT</h4>
            <p>I have strong project management skills and can self-manage, or manage others as needed.
            </p></div>
          </div>
        </div>
      </Styled.Container>
    </Layout>
  )
}

export default AboutMe


