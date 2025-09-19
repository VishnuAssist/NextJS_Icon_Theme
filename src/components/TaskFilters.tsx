"use client"

import type React from "react"

import { Box, Chip, TextField, InputAdornment } from "@mui/material"
import { Search } from "@mui/icons-material"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { setFilter, setSearchQuery } from "../store/slices/tasksSlice"

export default function TaskFilters() {
  const dispatch = useAppDispatch()
  const { filter, searchQuery } = useAppSelector((state) => state.tasks)

  const handleFilterChange = (newFilter: "all" | "completed" | "pending") => {
    dispatch(setFilter(newFilter))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value))
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
      <TextField
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
        size="small"
        sx={{ minWidth: 200 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search fontSize="small" />
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ display: "flex", gap: 1 }}>
        <Chip
          label="All"
          onClick={() => handleFilterChange("all")}
          variant={filter === "all" ? "filled" : "outlined"}
          color={filter === "all" ? "primary" : "default"}
          size="small"
        />
        <Chip
          label="Pending"
          onClick={() => handleFilterChange("pending")}
          variant={filter === "pending" ? "filled" : "outlined"}
          color={filter === "pending" ? "primary" : "default"}
          size="small"
        />
        <Chip
          label="Completed"
          onClick={() => handleFilterChange("completed")}
          variant={filter === "completed" ? "filled" : "outlined"}
          color={filter === "completed" ? "primary" : "default"}
          size="small"
        />
      </Box>
    </Box>
  )
}
