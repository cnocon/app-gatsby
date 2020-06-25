// import React from "react"
import styled from "@emotion/styled"

export const Container = styled.div(
  ({theme}) => ({
    position: `relative`,
    margin: `0 auto`,
    width: `${theme.layout.widths.default}`,
    maxWidth: `${theme.layout.widths.defaultMax}`,
    padding: `0`,
    display: `block`,
    fontFamily: `${theme.fonts.body.family}`,
  })
)
