// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Theme from "../Theme/Theme"

export const LeftBlock = styled.div`
  width: 100%;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media all and (min-width: 641px) {
    width: 50%;
    flex-basis: 50%;
    align-items: flex-start;
    justify-content: normal;
  }
`

export const RightBlock = styled.div`
  width: 100%;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${Theme.spacing.default};

  @media all and (min-width: 641px) {
    width: 50%;
    flex-basis: 50%;
    flex-direction: row;
    align-items: normal;
    justify-content: flex-end;
    text-align: normal;
    margin-top: 0;
  }
`

export const FooterInner = styled.div`
  width: ${Theme.layout.widths.full};
  max-width: ${Theme.layout.widths.fullMax};
  margin: 0 auto;
  font-size: ${Theme.fonts.sizes.sm};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media all and (min-width: 641px) {
    flex-direction: row;
    text-align: unset;
    justify-content: space-between;
  }
`

export const Footer = styled.footer`
  margin: ${Theme.spacing.lg} auto 0;
  padding: ${Theme.spacing.xl} 0;
  width: 100%;
  background-color: ${Theme.colors.grays.borderLight};
`

export const paragraph = css`
  margin: 0;
  padding: 0;
  font-size: ${Theme.fonts.sizes.sm};
`

export const smParagraph = css`
  margin: 0 0 3px;
  padding: 0;
  font-size: ${Theme.fonts.sizes.xs};
`

export const FooterLink = styled(Link)`
  color: ${Theme.colors.default.base};
  text-decoration: underline;
  font-size: inherit;

  &:hover {
    color: ${Theme.colors.default.lighter};
    text-decoration: none;
  }
`

export const flexParagraph = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2px 0 ${Theme.spacing.xs};
  font-size: ${Theme.fonts.sizes.xs};
`

export const Image = styled.img`
  max-height: 45px;
  max-width: 100%;
  display: block;
`

