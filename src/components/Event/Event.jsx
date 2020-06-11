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
      <h5 key={i} className="award"><i className="fa fa-trophy"></i> {item.name}<span>{item.detail}</span></h5>
    )
  })

  if (type === 'work') {
    return (
      <div className={`event ${current ? 'current' : null}`}>
        <span className="date">{data.year}</span>
        <h4>{data.position}</h4>
        <h5>{data.company}</h5>
        <small>{data.startDate} - {data.endDate}</small>
        {/* <p>{data.desc}</p> */}
        <ul className="list">
          {listItems}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="event">
        {/* <span className="date">{data.year}</span> */}
        <h4>{data.position}</h4>
        <h5>{data.company}</h5>

        <small>{data.timespan}</small>


        {data.desc ? <p>{data.desc}</p> : null}


        {awards ? awards : null }
      </div>
    )

  }

}

Event.propTypes = {
  current: PropTypes.bool,
  data: PropTypes.object.isRequired
}


export default Event
