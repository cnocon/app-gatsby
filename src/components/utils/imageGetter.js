import animationImg from '../../images/animation.png'
import destructuringImg from '../../images/destructuring.png'
import redesignImg from '../../images/redesign.png'
import sassImg from '../../images/sass.png'
import gitImg from '../../images/git.png'
import searchImg from '../../images/search.png'
import defaultImg from '../../images/default.png'
import netlifyImg from '../../images/netlify.png'

const imageGetter = (slug) => {
  if (slug.match(/animate-page-transitions-with-fade-effect-in-gatsby/)) {
    return animationImg
  } else if (slug.match(/what-is-destructuring-in-javascript/)) {
    return destructuringImg
  } else if (slug.match(/about-the-cristinio-redesign/)) {
    return redesignImg
  } else if (slug.match(/use-sass-to-automatically-convert-pixels-to-rems/)) {
    return sassImg
  } else if (slug.match(/create-a-command-line-alias-to-list-your-git-branches-by-most-recent/)) {
    return gitImg
  } else if (slug.match(/search-git-history-for-certain-words-and-phrases/)) {
    return searchImg
  } else if (slug.match(/automatically-build-and-deploy-your-gatsby-site-on-netlify-after-publishing-a-post-in-buttercms/)) {
    return netlifyImg
  } else {
    return defaultImg
  }
}

export default imageGetter