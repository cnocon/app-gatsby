import styled from "@emotion/styled"
import Theme from "../Theme/Theme"
import { Link } from 'gatsby'

export const BlogSidebar = styled.div`
  padding-right: 0;
  padding-left: 40px;

  article {
    margin-top: 2.5rem;
    margin-bottom: 4.5rem;
  }

  h4 {
    text-align: left;
    font-family: ${Theme.fonts.accent.family};
    font-weight: 400;
    letter-spacing: 1px;
    font-size: ${Theme.fonts.sizes.default};
    color: ${Theme.colors.grays.textDark};

    span {
      padding: 0 0 0 6px;
      background-color: #fff;
      z-index: 1;
      color: ${Theme.colors.default.base};
    }
  }
`

export const ArticleLink = styled(Link)`
  color: ${Theme.colors.default.base};
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.sm};
  display: block;
  font-family: ${Theme.fonts.headings.family};
  padding-bottom: 28px;
`

export const PopularPost = styled.div`
  padding: 0;
  text-align: left;
  clear: both;

  &:hover {
    text-decoration: underline;
  }

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    width: 45%;
    margin: 1rem 5% 1rem 0;
    display: inline-block;
  }
`

export const ImgWrapper = styled.div`
  float: left;

  img {
    text-align: center;
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 1rem 3rem 0;
  }
`

export const TagsWrapper = styled.div`
  text-align: left;
`

export const Tag = styled(Link)`
  padding: 0 8px;
  margin: 0 2px;
  // border: 1px solid ${Theme.colors.grays.borderMedium};
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: .03em;
  font-weight: 800;
  color: #6A7686;
  display: inline-block;
  line-height: ${Theme.fonts.sizes.lineHeights.md};
  margin: 5px;
  box-shadow: 0 .5px .5px ${Theme.colors.accents.vivid.red},       
    -.5px 0 .5px ${Theme.colors.accents.vivid.green},
    .5px 0 .5px ${Theme.colors.accents.vivid.yellow},
    0 -.5px .5px ${Theme.colors.accents.vivid.blue};
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 .5px .5px ${Theme.colors.accents.text.red},       
    -.5px 0 .5px ${Theme.colors.accents.vivid.green},
    .5px 0 .5px ${Theme.colors.accents.vivid.yellow},
    0 -.5px .5px ${Theme.colors.accents.vivid.blue};
    color: #345;
  }
`


export const Section = styled.section`
  padding-bottom: 3rem;
`