import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App.tsx"
import { store } from "./store/store.ts"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8B5CF6", 
      light: "#A78BFA",
      dark: "#7C3AED",
    },
    secondary: {
      main: "#10B981", 
      light: "#34D399",
      dark: "#059669",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E293B",
      secondary: "#64748B",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.125rem",
    },
    body1: {
      fontSize: "0.875rem",
    },
    body2: {
      fontSize: "0.75rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          border: "1px solid #E2E8F0",
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
