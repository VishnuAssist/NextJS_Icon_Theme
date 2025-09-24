import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import TopRated from "./pages/TopRated"
import Popular from "./pages/Popular"
import Upcoming from "./pages/UpComing"
import MovieDetaills from "./pages/MovieDetails"

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie/TopRated" element={<TopRated />} />
          <Route path="/Movie/Popular" element={<Popular />} />
          <Route path="/Movie/Upcoming" element={<Upcoming />} />
          <Route path="/Movie/:id" element={<MovieDetaills/>}/>
        </Routes>
      </Box>
    </Router>
  )
}

export default App
