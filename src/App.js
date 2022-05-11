import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import theme from './components/utils/theme.js'
import RouteComponent from './Routes.js'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer/>
      <RouteComponent />
    </ThemeProvider>
  )
}

export default App
