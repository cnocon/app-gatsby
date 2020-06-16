// import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const ReadableContent = styled.article`
  margin: 2.5rem auto;
  padding: .25em 0 4rem;
  display: block;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: 76rem) {
    width: 90%;
    max-width: 96rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Button = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: hsla(197, 92%, 68%, 1);
  color: #fff;
  font-size: 1rem;
  padding: .8em 1.6em;
  display: block;
  max-width: 17em;
  text-align: center;
  letter-spacing: .03em;
  border: 2px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2;
  outline: 0;
  text-shadow: none;
  transition: background-color .2s;
  &:hover {
    background-color: hsla(197, 79%, 68%, 1);
    color: #345;
  }
`
