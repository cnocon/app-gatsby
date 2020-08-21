// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Container = styled.div(
  ({theme}) => ({
    position: `relative`,
    margin: `0 auto`,
    width: `${theme.layout.widths.lg}`,
    padding: `0`,
    display: `block`,
    fontFamily: `${theme.fonts.body.family}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  })
)

export const Main = styled.main(
  ({theme}) => ({
    maxWidth: `${theme.layout.widths.lgMax}`,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%'

  })
)

export const WrapperOuter = css`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center; */
`
