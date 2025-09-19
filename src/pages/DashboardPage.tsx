import { Box, Container } from "@mui/material"
import Header from "../components/Header"
import Dashboard from "../components/Dashboard"

export default function DashboardPage() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container maxWidth="xl" sx={{ flex: 1, py: 3 }}>
        <Dashboard />
      </Container>
    </Box>
  )
}
