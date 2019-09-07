import createTheme from 'react-storefront/createTheme'
import red from '@material-ui/core/colors/red'

const theme = createTheme({
  typography: {
    useNextVariants: true
  },
  fontFamily: 'Roboto',
  palette: {
    secondary: {
      main: '#39A78E',
      light: red[600],
      dark: red[800],
      contrastText: '#fff'
    },
    price: {
      full: '#000',
      main: '#000',
      sale: '#900'
    }
  },
  spacing: {
    container: 15,
    row: 15
  },
  overrides: {
    RSFLoadMask: {
      fullscreen: {
        height: `calc(100vh - 181px)`
      }
    }
  }
})

export default theme
