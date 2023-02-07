import Header from './components/Header';
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

let cavaleLightTheme = createTheme({
  palette: {
    mode:'light',
    background: {
      default: '#fffbff'
    },
    
    primary: {
      main: '#ffe170',
      contrastText: '#221b00'
    },
    secondary: {
      main: '#705d00',
      contrastText: '#ffffff'
    },
    tertiary: {
      main:'#4d616c',
      contrastText:'#ffffff',
    },
    headerBack: {
      main:'#1d1b16',
      contrastText:"#ffe170",
    },
    text : {
      main:"#1d1b16",
    },
    contrastThreshold: 4.5,
    tonalOffset: .2,
  },
  typography: {
    h1: {
      fontFamily: 'aviano-flare'
    },
    h2: {
      fontFamily: 'aviano-flare'
    },
    h3: {
      fontFamily: 'aviano-flare'
    },
    h4: {
      fontFamily: 'aviano-flare'
    },
    h5: {
      fontFamily: 'aviano-flare'
    },
    h6: {
      fontFamily: 'aviano-flare'
    }
  },
})


export default function App() {
  return (
    <ThemeProvider theme={cavaleLightTheme}>
      <CssBaseline/>
        <Header />
   </ThemeProvider>
  );
}
