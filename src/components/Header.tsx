"use client"

import { Box, Typography, IconButton, InputBase, Avatar, Switch,  } from "@mui/material"
import { Search,  LightMode, DarkMode } from "@mui/icons-material"
// import { useAppDispatch, useAppSelector } from "../hooks/redux"

import { useTheme } from "../contexts/ThemeContext"

export default function Header() {
  // const dispatch = useAppDispatch()
  const { darkMode, toggleDarkMode } = useTheme()


  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        px: 4,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
      >
       
             <Typography variant="h4" fontWeight={600} color="text.primary" sx={{ mb: 0.5 }}>
              K TV
            </Typography>

     

            <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "background.paper",
        borderRadius: "50px",
        px: 1.2,
        py: 0.5,
        boxShadow: 1,
      }}
    >
      <LightMode fontSize="small" color={darkMode ? "disabled" : "primary"} />
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        size="small"
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "primary.main",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "primary.main",
          },
        }}
      />
      <DarkMode fontSize="small" color={darkMode ? "primary" : "disabled"} />
    </Box>

        {/* Right side - Search and actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.default",
              borderRadius: 2,
              px: 2,
              py: 1,
              minWidth: 200,
            }}
          >
            <Search sx={{ color: "text.secondary", mr: 1 }} fontSize="small" />
            <InputBase placeholder="Search..." sx={{ flex: 1, fontSize: "0.875rem" }} />
          </Box>

        

          <Avatar sx={{ width: 32, height: 32 }} src="/professional-headshot.png" />
        </Box>
      </Box>
    </Box>
  )
}
