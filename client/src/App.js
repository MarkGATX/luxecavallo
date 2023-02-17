import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import MensProducts from './components/MensProducts';
import WomensProducts from './components/WomensProducts';
import AccessoryProducts from './components/AccessoryProducts';
import HousewareProducts from './components/HousewareProducts';
import About from './components/About';
import Contact from './components/Contact';
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import './App.css';
import { responsiveFontSizes } from '@mui/material';


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

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
      fontFamily: 'aviano-flare',
      fontSize:'2em'
    },
    h2: {
      fontFamily: 'aviano-flare',
      fontSize:'1.5em'
    },
    h3: {
      fontFamily: 'aviano-flare',
      fontSize:'1.33em'
    },
    h4: {
      fontFamily: 'aviano-flare',
      fontSize:'1.17em'
    },
    h5: {
      fontFamily: 'aviano-flare',
      fontSize:'.83em'
    },
    h6: {
      fontFamily: 'aviano-flare',
      fontSize:'2em'
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

cavalloLightTheme = responsiveFontSizes(cavalloLightTheme)


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderMainSection = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Men') {
      return <MensProducts />;
    }
    if (currentPage === 'Women') {
      return <WomensProducts />;
    }
    if (currentPage === 'Accessories') {
      return <AccessoryProducts />;
    }
    if (currentPage === 'Household') {
      return <HousewareProducts />;
    }
    if (currentPage === 'About Us') {
      return <About />;
    }
    if (currentPage === 'Contact Us') {
      return <Contact />;
    }
    // return <Main />;
  };

  const handlePageChange = (page) => {document.documentElement.scrollTop = 0;setCurrentPage(page);}
  console.log(currentPage)

  return (
    <ThemeProvider theme={cavalloLightTheme}>
      <CssBaseline/>
      <ApolloProvider client={client}>
        <Header handlePageChange={handlePageChange} />

        {renderMainSection()}

        </ApolloProvider>
   </ThemeProvider>
  );
}
