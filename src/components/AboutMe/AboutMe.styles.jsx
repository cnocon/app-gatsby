// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const RotateWords = styled.h2`
  font-weight: 300;
  font-size: 2.6rem;
  line-height: 1.4;
  font-family: ${Theme.fonts.headings.family};
  text-transform: none;
  color: #345;
  @media all and (min-width: 920px) {
  font-size: 3.6rem;
  }

  strong {
    letter-spacing: -1px;
    font-weight: 800;
  }

  .rotate-words {
    font-size: inherit;
    min-height: 27px;
    font-family: ${Theme.fonts.headings.family};
	  display: inline-block;
    min-width: 180px;
    text-align: left;

    @media all and (min-width: 920px) {
      min-height: 39px;
      font-size: inherit;
    }
	}
.rotate-words span {
  font-size: inherit;
  font-family: ${Theme.fonts.headings.family}; line-height: 1.4;
	position: absolute; opacity: 0; font-weight: 800; letter-spacing: -1px;

@media all and (min-width: 920px) {
  font-size: inherit;
}

	}
.rotate-words span.rotate-in {
  font-size:inherit; line-height: 1.4;
	animation: rotateInWord .5s linear forwards;
	-webkit-animation: rotateInWord .5s linear forwards;
  @media all and (min-width: 920px) {
  font-size: inherit;
}
	}
.rotate-words span.rotate-out {
  font-size: inherit;
	animation: rotateOutWord .5s linear forwards;
	-webkit-animation: rotateOutWord .5s linear forwards;
  @media all and (min-width: 920px) {
  font-size: inherit;
}
	}
.rotate-words span:first-of-type {
	opacity: 1;
	}

@-webkit-keyframes rotateInWord {
    0% { opacity: 0; -webkit-transform: translateY(-39px); }
	100% { opacity: 1; -webkit-transform: translateY(0px); }
}
@-webkit-keyframes rotateOutWord {
    0% { opacity: 1; -webkit-transform: translateY(0px); }
	100% { opacity: 0; -webkit-transform: translateY(39px); }
}
@keyframes rotateInWord {
    0% { opacity: 0; transform: translateY(-39px); }
	100% { opacity: 1; transform: translateY(0px); }
}
@keyframes rotateOutWord {
    0% { opacity: 1; transform: translateY(0px); }
	100% { opacity: 0; transform: translateY(39px); }
}

  .rotate-out {
    position: absolute;
    opacity: 0;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: inherit;
    ${'' /* line-height: 1.4;
    font-size: 2.6rem; */}
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 87vh;

  @media screen and (max-width: 560px) {
    min-height: 140vh;
  }

  &::after,
  &::before {
    content: " ";
    display: table;
  }
`


export const Testo = styled.div`
  position: relative;
  padding: 1.4em 2.2em;
  margin: 0 16px 40px 0;
  background: #fff;
  ${'' /* border: 4px solid ${Theme.colors.grays.border}; */}
  ${'' /* border-radius: 6px; */}
  text-align: center;
  min-height: 425px;
  display: block;

  i {
    display: block;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  &::before {
    display: none !important;
  }
`


export const TestoHeading = styled.h2`
  margin: 0 0 10px;

  &::before {
    display: none !important;
  }
`

export const Link = styled.a`
  color: ${Theme.colors.default.base};
  text-decoration: none;
  border-bottom: 1px solid ${Theme.colors.default.base};
  transition: color .3s;

  &:hover,
  &:focus,
  &:active {
    color: ${Theme.colors.blue.base};
    border-bottom-color: ${Theme.colors.blue.lighter};
    text-decoration: none;
    outline: 0;
  }

`
export const Image = styled.img`
  display: block;
  border-radius: 0 !important;
  border: 0 !important;
  max-height: 80px;
  width: 100%;
  margin: 10px auto !important;
  text-align: center;
  float: none !important;
`
