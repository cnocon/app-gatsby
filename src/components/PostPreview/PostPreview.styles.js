// import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Theme from "../Theme/Theme"

export const ReadableContent = styled.article`
  margin: ${Theme.spacing.default} auto;
  padding: ${Theme.spacing.xs} 0 ${Theme.spacing.xl};
  display: block;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: ${Theme.breakpoints.md}) {
    width: ${Theme.layout.widths.default};
    max-width: ${Theme.layout.widths.defaultMax};
    padding-left: ${Theme.spacing.default};
    padding-right: ${Theme.spacing.default};
  }
  .box-shadow-red {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.red};
    padding-bottom: 1px;
  }

  .border-accent-red {
    background-color: ${Theme.colors.accents.red};

    &:hover {
      background-color: ${Theme.colors.accents.red};
      border-color: transparent;
      color: #fff;
    }

  }

  .box-shadow-yellow {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.yellow};
    padding-bottom: 1px;
  }

  .border-accent-yellow {
    background-color: ${Theme.colors.accents.yellow};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.yellow};
      border-color: transparent;
      color: ${Theme.colors.default.base};
    }
  }

  .box-shadow-blue {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.blue};
    padding-bottom: 1px;
  }

  .border-accent-blue {
    background-color: ${Theme.colors.accents.blue};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.blue};
      border-color: transparent;
      color: #fff;
    }
  }

  .box-shadow-green {
    box-shadow: inset 0 -3px 0 ${Theme.colors.accents.green};
    padding-bottom: 1px;
  }

  .border-accent-green {
    background-color: ${Theme.colors.accents.green};
    ${'' /* border: 2px solid ${Theme.colors.grays.borderDark}; */}

    &:hover {
      background-color: ${Theme.colors.accents.green};
      border-color: transparent;
      color: #fff;
    }
  }
`;

export const Button = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${Theme.colors.default.base};
  padding: 0 ${Theme.spacing.default};
  display: block;
  text-align: center;
  letter-spacing: .03rem;
  border-radius: 4px;
  ${'' /* text-transform: uppercase; */}
  outline: 0;
  text-shadow: none;
  transition: all .2s;
  font-size: ${Theme.fonts.sizes.xs};
  max-width: 18rem;
  line-height: 30px;
  height: 34px;
  font-family: ${Theme.fonts.body.family};
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid ${Theme.colors.default.base};

  color: ${Theme.colors.default.base};
    background-color: #fff;

  &:hover {
  color: #fff;
  background-color: ${Theme.colors.default.base};
  }
`

export const TitleLink = styled(Link)`
  font-size: ${Theme.fonts.sizes.md};
  line-height: ${Theme.fonts.sizes.xl};
  color: ${Theme.colors.default.base};

  &:hover {
    box-shadow: none;
    color: ${Theme.colors.default.base};
  }
`

export const Title = styled.h2`
  margin: 1rem auto 1.6rem;
`
