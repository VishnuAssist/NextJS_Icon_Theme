"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { createTheme, ThemeProvider as MuiThemeProvider, type Theme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

interface ThemeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

const createAppTheme = (darkMode: boolean): Theme => {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#A78BFA" : "#242236",
        light: darkMode ? "#C4B5FD" : "#2d2c2fff",
        dark: darkMode ? "#8B5CF6" : "#47464aff",
      },
      secondary: {
        main: darkMode ? "#34D399" : "#10B981",
        light: darkMode ? "#6EE7B7" : "#34D399",
        dark: darkMode ? "#10B981" : "#059669",
      },
      background: {
        default: darkMode ? "#0F172A" : "#e4e4f1",
        paper: darkMode ? "#1E293B" : "#d2d2db",
      },
      text: {
        primary: darkMode ? "#F1F5F9" : "#1E293B",
        secondary: darkMode ? "#94A3B8" : "#64748B",
      },
      divider: darkMode ? "#334155" : "#E2E8F0",
      action: {
        hover: darkMode ? "#334155" : "#F1F5F9",
      },
    },
    typography: {
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      h4: { fontWeight: 600, fontSize: "1.5rem" },
      h6: { fontWeight: 500, fontSize: "1.125rem" },
      body1: { fontSize: "0.875rem" },
      body2: { fontSize: "0.75rem" },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: darkMode
              ? "0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)"
              : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            border: `1px solid ${darkMode ? "#334155" : "#E2E8F0"}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
          },
        },
      },
    },
  })
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  // ✅ Only read localStorage on client after hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode")
      if (saved) {
        setDarkMode(JSON.parse(saved))
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode))
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  const theme = createAppTheme(darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
