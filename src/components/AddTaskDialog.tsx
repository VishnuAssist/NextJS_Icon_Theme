"use client"

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { addTask } from "../store/slices/tasksSlice"
import { setAddTaskDialogOpen } from "../store/slices/uiSlice"

export default function AddTaskDialog() {
  const dispatch = useAppDispatch()
  const { addTaskDialogOpen } = useAppSelector((state) => state.ui)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium" as "low" | "medium" | "high",
    category: "Design",
    assignee: "",
  })

  const handleClose = () => {
    dispatch(setAddTaskDialogOpen(false))
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      category: "Design",
      assignee: "",
    })
  }

  const handleSubmit = () => {
    if (formData.title.trim()) {
      dispatch(
        addTask({
          ...formData,
          completed: false,
        }),
      )
      handleClose()
    }
  }

  const handleChange = (field: string) => (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  return (
    <Dialog open={addTaskDialogOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}>
          <TextField label="Task Title" value={formData.title} onChange={handleChange("title")} fullWidth required />

          <TextField
            label="Description"
            value={formData.description}
            onChange={handleChange("description")}
            fullWidth
            multiline
            rows={2}
          />

          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select value={formData.priority} onChange={handleChange("priority")} label="Priority">
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={formData.category} onChange={handleChange("category")} label="Category">
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Development">Development</MenuItem>
              <MenuItem value="Meeting">Meeting</MenuItem>
              <MenuItem value="Research">Research</MenuItem>
              <MenuItem value="Review">Review</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Assignee" value={formData.assignee} onChange={handleChange("assignee")} fullWidth />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  )
}
