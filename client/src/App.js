import Header from './components/Header';
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

let cavalloLightTheme = createTheme({
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
    fontFamily: "ainslie-sans", 
    fontWeight: 400,
    fontStyle: 'normal',
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

cavalloLightTheme = createTheme(cavalloLightTheme, {
  components: {
    // Name of the component
    MuiListItemButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: cavalloLightTheme.palette.secondary.main,
          color: cavalloLightTheme.palette.secondary.contrastText,
          
          '&:hover, &.Mui-focusVisible': {
            backgroundColor: cavalloLightTheme.palette.headerBack.main,
            color: cavalloLightTheme.palette.headerBack.contrastText,
            scale:'105%',
            '& svg:first-of-type': {
              color: cavalloLightTheme.palette.headerBack.contrastText,
            },
           
          },
          '&:active': {
            boxShadow: 'inset 0 2px 4px -1px rgba(0, 0, 0, .2), inset 0 4px 5px 0px rgba(0, 0, 0, .14), inset 0 1px 10px 0px rgba(0, 0, 0, .12)',
          }
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: cavalloLightTheme.palette.secondary.contrastText,
          
          // '&:hover, &.Mui-focusVisible': {
          //   color: cavalloLightTheme.palette.headerBack.contrastText,
           
          // },
     
        },
      },
    },
  },
});


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderMainSection = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'MensProducts') {
      return <MensProducts />;
    }
    if (currentPage === 'WomensProducts') {
      return <WomensProducts />;
    }
    if (currentPage === 'AccessoryProducts') {
      return <AccessoryProducts />;
    }
    if (currentPage === 'HousewareProducts') {
      return <HousewareProducts />;
    }
    // return <Main />;
  };

  const handlePageChange = (page) => {document.documentElement.scrollTop = 0;setCurrentPage(page);}

  return (
    <ThemeProvider theme={cavalloLightTheme}>
      <CssBaseline/>
        <Header handlePageChange={handlePageChange} />
        {renderMainSection()}
   </ThemeProvider>
  );
}
