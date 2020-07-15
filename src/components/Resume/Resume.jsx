import React from "react";
import { ResumeData } from "../../data/ResumeData"
import Event from "../Event/Event"
import IconList from "../IconList/IconList"
import SectionTitle from "../SectionTitle/SectionTitle"
import * as Styled from "./Resume.styles"

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

const Resume = () => {

  return (
    <div className="row resume">
      <div className="col-md-12 col-lg-7" css={Styled.LeftCol}>
        <h2 css={Styled.HistoryHeading}>
          <i className="fa far fa-briefcase"></i>
          Work History
        </h2>
        <Styled.Timeline className="timeline">
          {workEvents}
        </Styled.Timeline>
      </div>

      <div className="col-md-12 col-lg-5" css={Styled.RightCol}>
        <h2 css={Styled.SectionTitle}>
          <span>
            <i className="fas fa-code"></i>
            Skills
          </span>
        </h2>
        <div className="skillset">{skills}</div>

        <h2 css={Styled.SectionTitle}>
          <span>
            <i className="fas fa-graduation-cap"></i>
            Education
          </span>
        </h2>
        {eduEvents}
        <article>
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
        </article>
        <article>
          <h2 css={Styled.SectionTitle}>
            <span>
              <i className="fal fa-gem"></i>
              Assets
            </span>
          </h2>
          <ul className="list">
            <li className="asset"><i className="far fa-check"></i><span><b>Empathy</b> to be an effective teammate</span></li>
            <li className="asset"><i className="far fa-check"></i><span>Organizational abilities for <b>managing projects</b> independently</span></li>
            <li className="asset"><i className="far fa-check"></i><span>Research skills to find the <b>best solutions</b> to new challenges</span></li>
            <li className="asset"><i className="far fa-check"></i><span>Enthusiasm and <b>passion</b> for front end work</span></li>
            <li className="asset"><i className="far fa-check"></i><span>Positive attitude and <b>willingness</b> to handle a wide variety of responsibilities</span></li>
            <li className="asset"><i className="far fa-check"></i><span><b>Effective communicator</b> with people from varying technical backgrounds</span></li>
            <li className="asset"><i className="far fa-check"></i><span>Dedicated to ongoing <b>professional development</b></span></li>
            <li className="asset"><i className="far fa-check"></i><span>Natural <b>problem solver</b></span></li>
            <li className="asset"><i className="far fa-check"></i><span><b>5+ years</b> of Agile experience</span></li>
            <li className="asset"><i className="far fa-check"></i><span><b>10+ years</b> of experience working on web applications in various capacities</span></li>
          </ul>
        </article>

        <article>
          <div className="card mt-4">
            <blockquote className="text-xs-center text-sm-right">
              <i className="fas fa-quote-left" css={Styled.BlockquoteIcon}></i>
              How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.
              <cite title="Annie Dillard">&mdash; Annie Dillard</cite>
            </blockquote>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Resume;

