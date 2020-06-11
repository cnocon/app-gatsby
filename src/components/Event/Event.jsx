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
      <li key={i}><i className="fa fa-trophy"></i> {item.name}<small>{item.detail}</small></li>
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
      <div className={`event ${current ? 'current' : null}`}>
        <span className="date">{data.year}</span>
        <h4>{data.position}</h4>
        <h5>{data.company}</h5>
        <small>{data.startDate} - {data.endDate}</small>
        {/* <p>{data.desc}</p> */}

        {listItems}

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
