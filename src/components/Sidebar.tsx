"use client"

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material"
import { Home, Dashboard, LiveTv } from "@mui/icons-material"
import { useAppSelector } from "../hooks/redux"
import { useNavigate, useLocation } from "react-router-dom"


const SIDEBAR_WIDTH = 80 // Smaller width since we only show icons

const navigationItems = [
  { icon: Home, path: "/" },
  // { icon: Dashboard, path: "/tasks" },
]

export default function Sidebar() {
  
  const navigate = useNavigate()
  const location = useLocation()
  const { sidebarOpen } = useAppSelector((state) => state.ui)

  const handleNavigation = (path: string) => {
    navigate(path)
  }

 const sidebarContent = (
  <Box
    sx={{
      width: SIDEBAR_WIDTH,
      height: "100vh",
      bgcolor: "background.paper",
      // borderRight: "1px solid",
      borderColor: "divider",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: 2,
    }}
  >
    {/* ✅ TOP FIXED ICON */}
    <Box
      sx={{
        minWidth: 0,
        borderRadius: 2,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 4, // spacing below top icon
      }}
    >
<IconButton sx={{ color: "common.white" }}>
    <LiveTv fontSize="medium" />
  </IconButton>
    </Box>

    {/* ✅ CENTERED NAV ICONS */}
    <Box
      sx={{
        flexGrow: 1, // takes remaining height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // centers vertically
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0 }}>
        {navigationItems.map((item, index) => {
          const isActive = location.pathname === item.path
          return (
            <ListItem key={index} disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  minWidth: 0,
                  borderRadius: 2,
                  p: 1.5,
                  bgcolor: isActive ? "primary.main" : "transparent",
                  color: isActive ? "primary.contrastText" : "text.secondary",
                  justifyContent: "center",
                  "&:hover": {
                    bgcolor: isActive ? "primary.dark" : "action.hover",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: isActive ? "primary.contrastText" : "text.secondary",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <item.icon fontSize="medium" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  </Box>
)

  return (
    <Drawer
      variant="permanent"
      open={sidebarOpen}
      sx={{
        width: sidebarOpen ? SIDEBAR_WIDTH : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          border: "none",
          display: "flex",
          justifyContent: "center", // Center content vertically inside drawer
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  )
}
