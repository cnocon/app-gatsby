import PropTypes from "prop-types"
import React from "react"

const Event = ({ current, data, type }) => {
  const listItems = data.descList.map((item, i) => {
    if (type === "work") {
      return <li key={`li-${i}`}>{item}</li>
    } else {
      return <p key={`p-${i}`}>{item}</p>
    }
  })

  const awards = data.awards.map((item, i) => {
    return (
      <h5 key={i} className="award"><i className="fa fa-trophy"></i> {item.name}<span style={{textAlign: 'left'}}>{item.detail}</span></h5>
    )
  })

  if (type === 'work') {
    return (

      <article className={`event ${current ? `current` : ''}`} style={{fontSize: '1.25rem'}}>
        <span className="date">{data.year}</span>
        <header>
          <h4 style={{fontSize: '1.4rem'}}>{data.position}</h4>
          <h5>{data.company}</h5>
          <span style={{fontSize: '1.1rem', textAlign: 'left'}} className="range">{data.startDate} - {data.endDate}</span>
        </header>
        {/* <p>{data.desc}</p> */}
        <ul className="list">
          {listItems}
        </ul>
      </article>
    )
  } else {
    return (
      <article className="event" style={{fontSize: '1.25rem'}}>
        {/* <span className="date">{data.year}</span> */}
        <header>
          <h4 style={{fontSize: '1.4rem'}}>{data.position}</h4>
          <h5>{data.company}</h5>
          <small style={{fontSize: '1.1rem'}}>{data.timespan}</small>
          {data.desc ? <p>{data.desc}</p> : null}
        </header>
        {awards ? awards : false }
      </article>
    )

  }

}

Event.propTypes = {
  current: PropTypes.bool,
  data: PropTypes.object.isRequired
}


export default Event
