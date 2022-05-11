import { createTheme } from "@mui/material";

const PRIMARY_COLOR = 'rgb(103, 183, 247)';
const SECONDARY_COLOR = 'rgb(103, 183, 247)';

/**
 * @returns {object} The theme object
 * - This function returns the theme object based on the mode selected
 * - The theme object is used by MUI to set the theme
 */
const baseTheme = (mode="dark") => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1400,
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "'Inter', sans-serif",
    body1: {
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode,
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    ...(mode === 'light'
      ? {
          primary: {
            main: PRIMARY_COLOR,
            contrastText: '#fff',
            grey: '#bab5b5',
          },
          text: {
            primary: '#000',
            secondary: '#555',
          },
          divider: PRIMARY_COLOR,
          background: {
            default: '#fff',
          },
        }
      : {
          primary: {
            main: "rgb(103, 183, 247)",
            contrastText: '#000',
            grey: '#bab5b5',
          },
          text: {
            primary: '#fff',
            secondary: '#ddd',
          },
          divider: SECONDARY_COLOR,
          background: {
            default: '#111',
            paper: '#111',
          },
        }),
  },
});


const theme = createTheme(baseTheme());
export default theme;