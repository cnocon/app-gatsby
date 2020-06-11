// import React from "react"
import styled from "@emotion/styled"

export const Container = styled.div(
  props => ({
    position: `relative`,
    margin: `0 auto`,
    width: props.width || `100%`,
    maxWidth: props.maxWidth || 1140,
    padding: `1.74rem 0`,
    display: props.display || `block`,
    flexDirection: props.flexDirection || `column`,
    alignItems: props.alignItems || `initial`,
    justifyContent: props.justifyContent || `initial`,
    fontFamily: `Roboto, sans-serif`,
  })
)
