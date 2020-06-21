// import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"
// import { Link } from "gatsby"
import Theme from "../Theme/Theme"

export const Button = styled.a`
  text-align: center;
  ${'' /* background-color: ${Theme.colors.blue.base}; */}
  background-color: #fff;
  color: ${Theme.colors.default.base};
  font-size: ${Theme.fonts.sizes.xs};
  line-height: 1.2;
  padding: ${Theme.spacing.sm} ${Theme.spacing.default};
  display: block;
  max-width: 17em;
  text-align: center;
  letter-spacing: .03em;
  border: 2px solid ${Theme.colors.grays.border};
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 800;
  outline: 0;
  text-shadow: none;
  transition: all .2s;

  &:hover {
    ${'' /* background-color:${Theme.colors.default.base}; */}
    ${'' /* color: #fff; */}
    background-color: #fff;
    color: ${Theme.colors.default.base};
    border: 2px solid ${Theme.colors.default.base};
    cursor: pointer;
    transform: scale(1.05);
  }

  span {
    display: inline-block;
    line-height: inherit;
    height: unset;
    padding: 0;
    margin-right: 0;
  }
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: start;

  .full-block {
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .left-block,
  .right-block {
    display: flex;
    flex-basis: 50%;
    max-width: 50%;
  }

  .left-block {
    justify-content: flex-start;
  }

  .right-block {
    justify-content: flex-end;
  }
`
