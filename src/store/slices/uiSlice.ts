import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UiState {
  sidebarOpen: boolean
  darkMode: boolean
  addTaskDialogOpen: boolean
}

const initialState: UiState = {
  sidebarOpen: true,
  darkMode: false,
  addTaskDialogOpen: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
    setAddTaskDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.addTaskDialogOpen = action.payload
    },
  },
})

export const { toggleSidebar, toggleDarkMode, setAddTaskDialogOpen } = uiSlice.actions
export default uiSlice.reducer
