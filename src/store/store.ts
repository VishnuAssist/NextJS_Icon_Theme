import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./slices/tasksSlice"
import uiReducer from "./slices/uiSlice"
import { moviesApi } from "../api/movieApi";
console.log("Store moviesApi reducerPath:", moviesApi.reducerPath);
export const store = configureStore({
  
  reducer: {
    tasks: tasksReducer,
    ui: uiReducer,


     [moviesApi.reducerPath]: moviesApi.reducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
