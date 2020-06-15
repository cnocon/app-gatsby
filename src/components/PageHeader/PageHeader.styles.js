import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
// import Img from "gatsby-image"

export const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LeftBlock = css`
  max-width: 70%;
  flex-basis: 70%;
  display: inline-block;
  margin-bottom: 2rem;

  @media screen and (max-width: 76rem) {
    max-width: 100%;
    flex-basis: 100%;
  }
`
export const RightBlock = css`
  max-width: 30%;
  flex-basis: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 76rem) {
    max-width: 100%;
    flex-basis: 100%;
  }
`

export const Icon = css`
  color: #d0f1ff;
  margin: 0 1rem;
  font-size: 2rem;
  line-height: 1;

  &:hover {
    color: hsla(197,92%,68%,1);
  }
`
