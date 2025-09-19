"use client"
import { Provider } from "react-redux"
import { ThemeProvider } from "../src/contexts/ThemeContext"
import App from "../src/App"
import { store } from "../src/store/store"

export default function Page() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  )
}
