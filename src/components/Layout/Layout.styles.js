// import React from "react"
import styled from "@emotion/styled"

export const Container = styled.div(
  props => ({
    position: `relative`,
    margin: `0 auto`,
    maxWidth: 1100,
    padding: `1.0875rem 1.45rem`,
    display: props.display || `block`,
    flexDirection: props.flexDirection || `column`,
    alignItems: props.alignItems || `initial`,
    justifyContent: props.justifyContent || `initial`,
    fontFamily: `Roboto, sans-serif`,
  })
)
