'use client'

import {createContext, PropsWithChildren, useEffect, useState} from "react";

const ThemeContext = createContext({
    isDarkTheme: true,
    setThemeHandler: (theme) => {
    }
})

export function ThemeProvider({children}: PropsWithChildren) {
    const [isDarkTheme, setDarkTheme] = useState(true);
    useEffect(initialThemeHandler, [])

    function initialThemeHandler() {
        if (!localStorage.getItem("isDarkTheme")) {
            localStorage.setItem("isDarkTheme", `${window.matchMedia('(prefers-color-scheme: dark)').matches}`)
        }
        const theme = JSON.parse(localStorage.getItem("isDarkTheme"))

        setDarkTheme(theme)
        theme && document.body.classList.add("dark")
    }

    function setThemeHandler(theme) {
        const isDarkTheme = theme === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches : theme

        setDarkTheme(isDarkTheme);
        localStorage.setItem("isDarkTheme", `${isDarkTheme}`);

        if (isDarkTheme) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark")
        }
    }

    return (
        <ThemeContext.Provider value={{isDarkTheme, setThemeHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;