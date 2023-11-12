import React, { createContext, useState, ReactNode } from 'react';

interface DarkModeProviderProps {
    children: ReactNode;
}

const DarkModeContext = createContext<any>(null);
const keyDarkModeParams = 'darkMode';
function DarkModeProvider({ children }: DarkModeProviderProps) {
    const storedValue = window.localStorage.getItem(keyDarkModeParams);
    const darkModeParams: boolean = storedValue === 'true';
    const [darkMode, setDarkMode] = useState<boolean>(darkModeParams);

    const toggleDarkMode = () => {
        window.localStorage.setItem(keyDarkModeParams, String(!darkMode));
        setDarkMode(!darkMode);
    };

    const contextValue = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <div>
            <DarkModeContext.Provider value={contextValue}>
                {children}
            </DarkModeContext.Provider>
        </div>
    );
}

export { DarkModeContext, DarkModeProvider };
