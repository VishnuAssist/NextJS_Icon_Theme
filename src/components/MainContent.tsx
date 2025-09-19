import { Box, Container } from "@mui/material"
import Header from "./Header"
import Dashboard from "./Dashboard"

export default function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
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
