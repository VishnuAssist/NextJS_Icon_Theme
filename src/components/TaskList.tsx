"use client"

import type React from "react"

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  IconButton,
  Checkbox,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material"
import { MoreVert, AccessTime, Delete, Edit } from "@mui/icons-material"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { toggleTask, deleteTask } from "../store/slices/tasksSlice"
import TaskFilters from "./TaskFilters"

const priorityColors = {
  high: "#EF4444",
  medium: "#F59E0B",
  low: "#10B981",
}

const categoryColors = {
  Design: "#8B5CF6",
  Meeting: "#10B981",
  Research: "#6B7280",
  Development: "#3B82F6",
  Review: "#F59E0B",
}

export default function TaskList() {
  const dispatch = useAppDispatch()
  const { tasks, filter, searchQuery } = useAppSelector((state) => state.tasks)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)

  const filteredTasks = tasks.filter((task) => {
    // Filter by status
    let statusMatch = true
    if (filter === "completed") statusMatch = task.completed
    if (filter === "pending") statusMatch = !task.completed

    // Filter by search query
    const searchMatch =
      searchQuery === "" ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.category.toLowerCase().includes(searchQuery.toLowerCase())

    return statusMatch && searchMatch
  })

  const handleToggleTask = (taskId: string) => {
    dispatch(toggleTask(taskId))
  }

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, taskId: string) => {
    setAnchorEl(event.currentTarget)
    setSelectedTaskId(taskId)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedTaskId(null)
  }

  const handleDeleteTask = () => {
    if (selectedTaskId) {
      dispatch(deleteTask(selectedTaskId))
    }
    handleMenuClose()
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            To-do list
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wednesday, 11 May
          </Typography>
        </Box>

        <TaskFilters />

        <List sx={{ py: 0 }}>
          {filteredTasks.map((task, index) => (
            <ListItem
              key={task.id}
              sx={{
                mb: 2,
                p: 0,
                borderRadius: 2,
                bgcolor: task.completed ? "action.hover" : "transparent",
                border: "1px solid",
                borderColor: task.completed
                  ? "divider"
                  : categoryColors[task.category as keyof typeof categoryColors] || "divider",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                  sx={{
                    color: categoryColors[task.category as keyof typeof categoryColors] || "primary.main",
                    "&.Mui-checked": {
                      color: categoryColors[task.category as keyof typeof categoryColors] || "primary.main",
                    },
                  }}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    sx={{
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed ? "text.secondary" : "text.primary",
                    }}
                  >
                    {task.title}
                  </Typography>
                  {task.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                      {task.description}
                    </Typography>
                  )}

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                    <Chip
                      label={task.category}
                      size="small"
                      sx={{
                        bgcolor: categoryColors[task.category as keyof typeof categoryColors] || "primary.main",
                        color: "white",
                        fontSize: "0.75rem",
                      }}
                    />

                    <Chip
                      label={task.priority}
                      size="small"
                      sx={{
                        bgcolor: priorityColors[task.priority],
                        color: "white",
                        fontSize: "0.75rem",
                      }}
                    />

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <AccessTime fontSize="small" sx={{ color: "text.secondary" }} />
                      <Typography variant="caption" color="text.secondary">
                        Today 10:00 PM - 11:45 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {task.assignee && (
                    <Avatar sx={{ width: 24, height: 24, fontSize: "0.75rem" }}>{task.assignee.charAt(0)}</Avatar>
                  )}
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e, task.id)}>
                    <MoreVert fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>
            <Edit fontSize="small" sx={{ mr: 1 }} />
            Edit
          </MenuItem>
          <MenuItem onClick={handleDeleteTask} sx={{ color: "error.main" }}>
            <Delete fontSize="small" sx={{ mr: 1 }} />
            Delete
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  )
}
