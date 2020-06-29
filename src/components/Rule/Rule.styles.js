import styled from "@emotion/styled"
import Theme from "../Theme/Theme"
import { css } from "@emotion/core"

export const RuleWrapper = styled.h2`
  position: relative;
  max-width: ${Theme.layout.widths.lgMax};
  width: ${Theme.layout.widths.full};
  margin: 1em 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    margin: 3px auto 0;
    width: ${Theme.layout.widths.full};
    max-width: none;
    border-bottom: 4px solid #F4F6F7;
  }

  i.fa {
    color: ${Theme.colors.grays.text};
  }
`

export const RuleSpan = css`
  position: relative;
  display: inline-block;
  padding-right: 1.4em;
  background: #fff;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Lato", Arial, sans-serif;
  `
