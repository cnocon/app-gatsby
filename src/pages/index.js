import React from "react"
// import { Link } from "gatsby"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ResumeData } from "../data/ResumeData"
import Layout from "../components/Layout/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Event from "../components/Event/Event"

const IndexPage = () => {
  const workEvents = ResumeData.experience.map((item, i) => {
    return <Event key={`event-${i}`} current={i === 0} data={item} type="work"/>
  })

  const eduEvents = ResumeData.education.map((item, i) => {
    return <Event key={`event-edu-${i}`} current={false} data={item} type="edu"/>
  })

  const skills = ResumeData.skills.map((skill, i) => {
    return(
      <div className="skill-unit" key={`skill-${i}`}>
        <h4>
        {/* <FontAwesomeIcon icon={skill.icon}/> */}
        <i className={skill.icon}></i> {skill.name}</h4>
        <div className="bar" data-percent={skill.percent}>
          <div className="progress" style={{width: `${skill.percent}%`}}></div>
        </div>
      </div>
    )
  })

  return (
    <Layout classNames="resume">
      <div className="row">
        <div className="col-md-6 col-lg-7">
          <div className="timeline">
            <h2><i className="fa fa-flask"></i>WORK HISTORY</h2>
            {workEvents}
          </div>

          <div className="timeline">
            <h2><i className="fa icon-college"></i>EDUCATION HISTORY</h2>
            {eduEvents}
          </div>

        </div>

        <div className="col-md-6 col-lg-5">
          <h2 className="section-title">
            <span><i className="fa icon-cog-1"></i>DEVELOPMENT SKILLS</span>
          </h2>

          <div className="skillset">
            {skills}
          </div>

          <h2 className="section-title"><span><i className="fa icon-comment"></i>TESTIMONIALS</span></h2>
          <div className="testo-group">
            <div className="testo"><img alt="PHILLIP AUSTIN" src="https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/testo-01.jpg"/><p></p>
            <h4>PHILLIP AUSTIN <span>CEO / GRAVITY INC.</span></h4>
            <p>He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much. Also he is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much.</p></div>
            <div className="testo"><img alt="GARY MORGAN" src="https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/testo-02.jpg"/><p></p>
            <h4>GARY MORGAN <span>CHEMIST / FREELANCER</span></h4>
            <p>He was a great co-worker and a friend. I would’t be where i am without his support.</p></div>
            <div className="testo"><img alt="JASON WILSON" src="https://themes.pixelwars.org/cvcard-wp/wp-content/uploads/2014/04/testo-03.jpg"/><p></p>
            <h4>JASON WILSON <span>LAB GEEK / MIAMI METRO</span></h4>
            <p>He is ok.</p></div>
            </div>
        </div>
      </div>

      <SEO title="Home" />
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/articles">View Articles</Link> <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
