import { createTheme, responsiveFontSizes } from '@mui/material'

// For custon theme in MUI
const theme = createTheme({
  // color pallete for MUI theme
  palette: {
    mode: 'light',
    primary: { main: '#255c99' }, // Blue
    secondary: { main: '#f1c21b' }, // yellow
    alternate: { main: '#4fb477' }, // green
    error: { main: '#ee6352' }, // red
    background: {
      default: '#fffded' // white
    }
  },
  typography: {
    fontFamily: '"Ubuntu"'
  },
  color: {
    main: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)'
  }
})

export default responsiveFontSizes(theme)
