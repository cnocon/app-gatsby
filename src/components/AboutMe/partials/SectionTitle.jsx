import React from 'react'

const SectionTitle = ({ text, icon }) => {
  return (
    <h2 className="section-title">
      <span style={{textTransform: `uppercase`}}>
        <i className={ icon } style={{color: '#345'}}></i>
        { text.toUpperCase() }
      </span>
    </h2>
  )
}

export default SectionTitle
