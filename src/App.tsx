import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Sidebar from "./components/Sidebar"
import DashboardPage from "./pages/DashboardPage"
import TaskManagementPage from "./pages/TaskManagementPage"

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/tasks" element={<TaskManagementPage />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
