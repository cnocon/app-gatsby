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
    font-weight: 400;
    letter-spacing: 1px;
    vertical-align: baseline;
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    color: ${Theme.colors.grays.textDarker};
    
    @media all and (max-width: ${Theme.breakpoints.max.md}) {
      max-width: 375px;
      margin-left: 0;
      margin-right: 0;
    }

    i {
      color: ${Theme.colors.grays.borderMedium};
      margin-right: 6px;
      font-weight: 700;
    }
  }
`

export const ArticleLink = styled(Link)`
  color: ${Theme.colors.default.base};
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.md};
  display: block;
  font-family: ${Theme.fonts.headings.family};
  padding-bottom: ${Theme.spacing.md};
`

export const PopularPost = styled.div`
  padding: 0;
  text-align: left;
  clear: both;

  &:hover {
    text-decoration: underline;
  }

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    max-width: 375px;
    margin-left: 0;
    margin-right: 0;
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

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    max-width: 375px;
    margin-left: 0;
    margin-right: 0;
  }
`

export const Tag = styled(Link)`
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: .03em;
  font-weight: 800;
  color: ${Theme.colors.grays.textDarkest};
  display: inline-block;
  line-height: ${Theme.fonts.sizes.lineHeights.md};
  margin: 5px 5px 5px 0;
  padding: 0 8px;
  box-shadow: 0 .5px .5px ${Theme.colors.accents.vivid.red},       
    -.5px 0 .5px ${Theme.colors.accents.vivid.green},
    .5px 0 .5px ${Theme.colors.accents.vivid.yellow},
    0 -.5px .5px ${Theme.colors.accents.vivid.blue};
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 1px 1px ${Theme.colors.accents.text.red},       
    -1px 0 1px ${Theme.colors.accents.vivid.green},
    1px 0 1px ${Theme.colors.accents.vivid.yellow},
    0 -1px 1px ${Theme.colors.accents.vivid.blue};
    color: #345;
  }
`


export const Section = styled.section`
  padding-bottom: 3rem;
`