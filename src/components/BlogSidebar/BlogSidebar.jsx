import React from "react"
// import searchImg from '../../images/search.png'
// import gitImg from '../../images/git.png'
// import cleanHistoryImg from '../../images/clean-history.png'
import * as Styled from "./BlogSidebar.styles"
// import IconList from '../IconList/IconList'

const BlogSidebar = ({ colClasses, categories }) => {
  const links = categories.map(c => {
    return <Styled.Tag to={`/articles/${c}/page-1`} className="tag" key={c}>{c}</Styled.Tag>
  });

  return (
    <Styled.BlogSidebar className={colClasses}>
      

      <article>
        <h4>
          <i className="fal fa-star"></i>
          <span>POPULAR POSTS</span>
        </h4>
        <Styled.PopularPost>
          <Styled.ImgWrapper>
            {/* <img src={cleanHistoryImg} alt="Creating a Single, Production-Ready Git Commit from Multiple Commits" /> */}
          </Styled.ImgWrapper>
          <Styled.ArticleLink to="/articles/creating-a-single-production-ready-git-commit-from-multiple-commits">Creating a Single, Production-Ready Git Commit from Multiple Commits</Styled.ArticleLink>
        </Styled.PopularPost>
        <Styled.PopularPost>
          <Styled.ImgWrapper>
            {/* <img src={gitImg} alt="Creating a Single, Production-Ready Git Commit from Multiple Commits" /> */}
          </Styled.ImgWrapper>
          <Styled.ArticleLink to="/articles/create-a-command-line-alias-to-list-your-git-branches-by-most-recent">Create an Alias to List Git Branches by Date</Styled.ArticleLink>
        </Styled.PopularPost>
        <Styled.PopularPost>
          <Styled.ImgWrapper>
            {/* <img src={searchImg} alt="Creating a Single, Production-Ready Git Commit from Multiple Commits" /> */}
          </Styled.ImgWrapper>
          <Styled.ArticleLink to="/articles/search-git-history-for-certain-words-and-phrases">Search Git History for Certain Words and Phrases</Styled.ArticleLink>
        </Styled.PopularPost>
      </article>
      <article>
        {/* <SectionTitle text="Blog Categories" icon="fas fa-tags" /> */}
        <h4>
          <i className="fal fa-tags"></i>
          <span>BLOG CATEGORIES</span>
        </h4>
        <Styled.TagsWrapper>{links}</Styled.TagsWrapper>
      </article>
      {/* <article>
        <h4>
          <i className="fal fa-handshake" style={{fontWeight: '400'}}></i>
          <span>CONNECT</span>
        </h4>
  
        <IconList 
          classes='wrap-more left' 
          listItems={[
          {
            icon: 'fab fa-codepen',
            link: 'https://codepen.io/cnocon',
            text: 'CodePen',
            classes: 'rainbow-box-shadow-rounded'
          },
          {
            icon: 'fab fa-github',
            link: 'https://github.com/cnocon',
            text: 'GitHub',
            classes: 'rainbow-box-shadow-rounded'
          },
          {
            icon: 'fal fa-hashtag',
            link: 'https://twitter.com/cnocon',
            text: 'Twitter',
            classes: 'rainbow-box-shadow-rounded'
          },
          {
            icon: 'fab fa-linkedin-in',
            link: 'https://www.linkedin.com/in/cristinoconnor',
            text: 'LinkedIn',
            classes: 'rainbow-box-shadow-rounded'
          },
          {
            icon: 'fab fa-stack-overflow',
            link: 'https://stackoverflow.com/users/2187039/cnocon',
            text: 'Stack Overflow',
            classes: 'rainbow-box-shadow-rounded'
          },
          {
            icon: 'fal fa-envelope',
            link: 'mailto:her@cristin.io',
            text: 'Email',
            classes: 'rainbow-box-shadow-rounded'
          }
        ]} 
      />
      </article> */}
    </Styled.BlogSidebar>
  )
}

export default BlogSidebar