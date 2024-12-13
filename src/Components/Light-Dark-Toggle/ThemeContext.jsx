// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

// Create a custom hook to access ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Provide ThemeContext
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
