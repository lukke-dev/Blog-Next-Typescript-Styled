import { ThemeProvider } from 'styled-components';
import {theme} from '../src/styles/theme'
import { GlobalStyles} from '../src/styles/global-styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider=(Story,context)=>{
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];
