'use client'

import {useContext} from "react";
import ThemeContext from "@/store/ThemeContext";

function ThemeSwitcher() {

    const {isDarkTheme, setThemeHandler} = useContext(ThemeContext)

    return (
        <div className="flex space-x-2">
            {isDarkTheme ? (
                <button
                    type="button"
                    className="py-1 px-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => setThemeHandler(false)}
                >
                    Light
                </button>
            ) : (
                <button
                    type="button"
                    className="py-1 px-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => setThemeHandler(true)}
                >
                    Dark
                </button>
            )}
            <button
                type="button"
                className="py-1 px-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => setThemeHandler("system")}
            >
                System
            </button>
        </div>


    );
}

export default ThemeSwitcher;