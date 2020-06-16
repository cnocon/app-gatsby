import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import SiteTheme from './SiteTheme'
import GlobalStyles from './GlobalStyles'

const ThemeProvider = ({ theme, children }) => {
  const GlobalStylesContainer = () => {
    return(
      <Global styles={GlobalStyles.styles}/>
    )
  }

  return(
    <EmotionThemeProvider theme={SiteTheme}>
      <GlobalStylesContainer />
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
