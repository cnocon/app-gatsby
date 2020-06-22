// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"

export const FeaturedImage = styled.img`
  display: block;
  width: 100%;
`;

export const FeaturedImageContainer = css`
  padding: 1rem;
  margin: 2rem 0 2rem 2rem;
  border: 2px solid #F4F6F7;
  border-radius: 5px;
  width: 50%;
  max-width: 200px;
  float: right;

  @media screen and (max-width: 500px) {
    display: none;
  }
`
