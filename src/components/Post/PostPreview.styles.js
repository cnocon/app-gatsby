// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
{/* background-color: rgba(118,215,254,.35); */}

export const Article = styled.article({
  marginBottom: `2.5rem`,
  marginTop: `2.5rem`,
  padding: `.25em 0 4rem`,
  display: `block`,
});

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
