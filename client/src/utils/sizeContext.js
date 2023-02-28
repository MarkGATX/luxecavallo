import React, { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';


// Initialize new context for menu
export const SizeContext = createContext();

// We create a custom hook to provide immediate usage of the menu context in other components
export const useSizeContext = () => useContext(SizeContext);

// MenuProvider component that holds initial state, returns provider component
export const SizeProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(false);

    

      useEffect(() => {
        // Update the localStorage count variable using the setItem method
        console.log('%cisMenuOpen', 'color:green')
        console.log(isMenuOpen +'context for menu')
      },[isMenuOpen]);

  // Provider components expect a value prop to be passed
  return (
    <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
      {/* Render children passed from props */}
      {children}
    </MenuContext.Provider>
  );
};
