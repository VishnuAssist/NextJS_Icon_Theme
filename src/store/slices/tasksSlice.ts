import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: "low" | "medium" | "high"
  dueDate?: string
  assignee?: string
  category: string
  createdAt: string
}

interface TasksState {
  tasks: Task[]
  filter: "all" | "completed" | "pending"
  searchQuery: string
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Client Review & Feedback",
      description: "Landing page redesign",
      completed: true,
      priority: "high",
      category: "Design",
      assignee: "Mike",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Project onboarding",
      description: "Google Meeting",
      completed: false,
      priority: "medium",
      category: "Meeting",
      assignee: "Sarah",
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Design research",
      description: "Figma file",
      completed: false,
      priority: "medium",
      category: "Research",
      assignee: "Team",
      createdAt: new Date().toISOString(),
    },
  ],
  filter: "all",
  searchQuery: "",
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id" | "createdAt">>) => {
      const newTask: Task = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      }
      state.tasks.push(newTask)
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id)
      if (index !== -1) {
        state.tasks[index] = action.payload
      }
    },
    setFilter: (state, action: PayloadAction<"all" | "completed" | "pending">) => {
      state.filter = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const { addTask, toggleTask, deleteTask, updateTask, setFilter, setSearchQuery } = tasksSlice.actions
export default tasksSlice.reducer
