import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import TopRated from "./pages/TopRated"
import Popular from "./pages/Popular"
import Upcoming from "./pages/UpComing"

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/Upcoming" element={<Upcoming />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
