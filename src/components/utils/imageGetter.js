import animationImg from '../../images/animation.png'
import destructuringImg from '../../images/destructuring.png'
import redesignImg from '../../images/redesign.png'
import convertImg from '../../images/convert.png'
import gitImg from '../../images/git.png'
import searchImg from '../../images/search.png'
import defaultImg from '../../images/default.png'


const imageGetter = (slug) => {
  if (slug.match(/animate-page-transitions-with-fade-effect-in-gatsby/)) {
    console.log(`${animationImg}`);
    return `${animationImg}`
  } else if (slug === 'what-is-destructuring-in-javascript') {
    return destructuringImg
  } else if (slug === 'about-the-cristinio-redesign') {
    return redesignImg
  } else if (slug === 'use-sass-to-automatically-convert-pixels-to-rems') {
    return convertImg
  } else if (slug === 'create-a-command-line-alias-to-list-your-git-branches-by-most-recent') {
    return gitImg
  } else if (slug === 'search-git-history-for-certain-words-and-phrases') {
    return searchImg
  } else {
    return defaultImg
  }
}

export default imageGetter