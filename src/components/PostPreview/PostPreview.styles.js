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

export const Button = styled(Link)(
  () => ({
    marginLeft: `auto`,
    marginRight: `auto`,
    textAlign: `center`,
    color: `${Theme.colors.default.base}`,
    fontSize: `${Theme.fonts.sizes.xs}`,
    padding: `${Theme.spacing.sm} ${Theme.spacing.default}`,
    display: `block`,
    textAlign: `center`,
    letterSpacing: `.03rem`,
    borderRadius: `4px`,
    textTransform: `uppercase`,
    lineHeight: `${Theme.fonts.sizes.sm}`,
    outline: `0`,
    textShadow: `none`,
    transition: `all .2s`,
    fontSize: `1rem`,
    maxWidth: `18rem`,
    lineHeight: `1`,
    fontFamily: `${Theme.fonts.body.family}`,
    fontWeight: `900`,
    backgroundColor: `${Theme.colors.default.base}`,
    color: `#fff`
  })
)

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
