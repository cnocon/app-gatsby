import React from "react"
import { ResumeData } from "../data/ResumeData"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Event from "../components/Event/Event"
import Header from "../components/Header/Header"
import PageHeader from "../components/PageHeader/PageHeader"

const IndexPage = () => {
  const workEvents = ResumeData.experience.map((item, i) => {
    return <Event key={`event-${i}`} current={i === 0} data={item} type="work"/>
  })

  const eduEvents = ResumeData.education.map((item, i) => {
    return <Event key={`event-edu-${i}`} current={i === 0} data={item} type="edu"/>
  })

  const skills = ResumeData.skills.map((skill, i) => {
    return(
      <div className="skill-unit" key={`skill-${i}`}>
        <h4 style={{fontSize: '1.1rem'}}>
        <i className={skill.icon}></i> {skill.name}</h4>
        <div className="bar" data-percent={skill.percent}>
          <div className="progress" style={{width: `${skill.percent}%`}}>
            <span className="score" style={{fontSize: '1.1rem'}}>{skill.percent}%</span>
          </div>
        </div>
      </div>
    )
  })

  return (

      <Layout maxWidth="100rem" width="90%">
        <PageHeader pageHeader="" breadcrumbs={false}/>
        <Header ruleTitle={`Résumé`.toUpperCase()} ruleIcon="icon-leaf"/>
        <SEO stitle="Résumé" />
        <div className="row">
          <div className="col-md-6 col-lg-7 left-col">
            <h2><i className="fas fa-flask"></i>Work History</h2>
            <div className=" timeline">
              {workEvents}
            </div>

            {/* <h2><i className="fas fa-graduation-cap"></i>Education</h2> */}
            {/* <div className="timeline"> */}
              {/* {eduEvents} */}
            {/* </div> */}
          </div>

          <div className="col-md-6 col-lg-5 right-col">
            <h2>Skills</h2>
            <div className="skillset">
              {skills}
            </div>


            <div className="card mt-4"><blockquote className="text-xs-center text-sm-right"><i className="fas fa-quote-left"></i>How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.<cite title="Annie Dillard"> Annie Dillard</cite></blockquote></div>

            <h2>Assets</h2>
            <ul clasName="list" style={{fontSize: '1.25rem'}}><li className="asset">Empathy to be an effective teammate</li><li className="asset">Organizational abilities for managing projects independently</li><li className="asset">Research skills to find the best solutions to new challenges</li><li className="asset">Enthusiasm and passion for front end work</li><li className="asset">Positive attitude and willingness to handle a wide variety of responsibilities</li><li className="asset">Effective communicator with people from varying technical backgrounds</li><li className="asset">Dedicated to ongoing professional development</li><li className="asset">Natural problem solver</li><li className="asset">5+ years of Agile experience</li><li className="asset">10+ years of experience working on web applications in various capacities</li></ul>

            <h2>Education</h2>
            {eduEvents}
          </div>

        </div>

      </Layout>

  )
}

export default IndexPage
