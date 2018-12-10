import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      `'Josefin Sans'`,
      `sans-serif`
    ].join(','),
    body2: {
      color: 'rgba(0,0,0,.6)',
      fontSize: 14
    },
    subtitle1: {
      color: 'rgba(0,0,0,.6)',
      fontSize: 16
    }
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: 'rgba(0,0,0,.6)'
      }
    },
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
