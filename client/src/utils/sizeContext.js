import React, { createContext, useContext } from 'react';
import { useMediaQuery } from '@mui/material';



// Initialize new context for menu
export const SizeContext = createContext();

// We create a custom hook to provide immediate usage of the menu context in other components
export const useSizeContext = () => useContext(SizeContext);

// MenuProvider component that holds initial state, returns provider component
export const SizeProvider = ({ children }) => {
  const isDesktop = useMediaQuery('(min-width:1024px)');


  // Provider components expect a value prop to be passed
  return (
    <SizeContext.Provider value={{isDesktop}}>
      {/* Render children passed from props */}
      {children}
    </SizeContext.Provider>
  );
};
