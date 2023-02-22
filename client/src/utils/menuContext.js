import React, { createContext, useContext } from 'react';
import { useState } from 'react';

// Initialize new context for menu
export const MenuContext = createContext();

// We create a custom hook to provide immediate usage of the menu context in other components
export const useMenuContext = () => useContext(MenuContext);

// MenuProvider component that holds initial state, returns provider component
export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
      };

  // Provider components expect a value prop to be passed
  return (
    <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
      {/* Render children passed from props */}
      {children}
    </MenuContext.Provider>
  );
};
