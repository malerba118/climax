import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      `'Josefin Sans'`,
      `sans-serif`
    ].join(',')
  },
  palette: {
    primary: {
      main: '#ee6d6d',
    },
    secondary: {
      main: '#edf1f0',
    },
  },
})

export default theme
