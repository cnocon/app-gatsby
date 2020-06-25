import React from 'react'
import * as Styled from './Rule.styles'

const Rule = ({ title, icon }) => {
  return (
    <Styled.RuleWrapper>
      <span css={Styled.RuleSpan}>
        <i className={`rule-icon ${icon}`}></i>
        {title}
      </span>
    </Styled.RuleWrapper>
  )
};

export default Rule
