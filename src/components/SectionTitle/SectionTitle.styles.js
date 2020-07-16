import { css } from '@emotion/core'
import Theme from '../Theme/Theme'

export const SectionTitle = css`
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: Lato;
  margin: 0 0 1em;
  text-align: left;
  display: block;

  &:first-of-type {
    /* margin: 25px 0 40px 0; */
    /* margin: 25px 0 0 0; */
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: 0;
    width: 100%;
    border-bottom: 4px solid #F4F6F7;
  }

  span {
    position: relative;
    display: inline-block;
    padding-right: 1em;
    background: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 700;
    font-family: Lato, sans-serif;
    text-transform: uppercase;

    i {
      font-size: 16px;
      margin-right: 14px;
      line-height: 39px;
      text-align: center;
      color: #B7C6C9;
      background: #fff;
      border-radius: 50%;
      border: 4px solid #F4F6F7;
      display: inline-block;
      width: 47px;

      &::before {
        font-style: normal;
        font-weight: normal;
        speak: none;
        display: inline-block;
        text-decoration: inherit;
        width: 39px;
        height: 39px;
        margin-right: auto;
        text-align: center;
        opacity: .8;
        font-variant: normal;
        text-transform: none;
        line-height: 39px;
        margin-left: auto;
        font-size: 120%;
        margin: 0 auto 0 0px;
        vertical-align: middle;
        color: ${Theme.colors.grays.text};
        font-weight: normal;
        font-weight: bold;
      }
    }
  }
`

