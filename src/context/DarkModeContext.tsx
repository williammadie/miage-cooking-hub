import React, {createContext, useState, ReactNode} from 'react';

interface DarkModeProviderProps {
    children: ReactNode;
}

const DarkModeContext = createContext<any>(null);

function DarkModeProvider({children}: DarkModeProviderProps) {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode( !darkMode);
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

export {DarkModeContext, DarkModeProvider};
