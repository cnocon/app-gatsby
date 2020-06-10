import PropTypes from "prop-types"
import React from "react"

const Event = ({ current, data, type }) => {
  const listItems = data.descList.map((item, i) => {
    return (
      <li key={`li-${i}`}>{item}</li>
    )
  })

  const awards = data.awards.map((item, i) => {
    return (
      <li key={i}><i className="fa fa-trophy"></i> {item.name}<small>{item.detail}</small></li>
    )
  })

  if (type === 'work') {
    return (
      <div className={`event ${current ? 'current' : null}`}>
        <span className="date">{data.year}</span>
        <h4>{data.position}</h4>
        <h5>{data.company}</h5>
        {/* <p>{data.desc}</p> */}
        <ul>
          {listItems}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="event">
        <span className="date">{data.year}</span>
        <h4>{data.position}</h4>
        <h5>{data.company}</h5>
        {/* <p>{data.desc}</p> */}
        <ul>
          {listItems}
        </ul>
        <ul className="awards">
          {awards}
        </ul>
      </div>
    )

  }

}

Event.propTypes = {
  current: PropTypes.bool,
  data: PropTypes.object.isRequired
}


export default Event
