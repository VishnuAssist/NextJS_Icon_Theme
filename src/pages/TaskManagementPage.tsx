import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"
import Header from "../components/Header"
import TaskList from "../components/TaskList"

import AddTaskDialog from "../components/AddTaskDialog"

export default function TaskManagementPage() {
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
        <Typography variant="h4" fontWeight={600} color="text.primary" sx={{ mb: 3 }}>
          Task Management
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{xs:12}}>
            <Card>
              <CardContent>
               
                <TaskList />
              </CardContent>
            </Card>
          </Grid>

       
        </Grid>

        <AddTaskDialog />
      </Container>
    </Box>
  )
}
