import { Box, Grid } from "@mui/material"
import TaskList from "./TaskList"

import StatsCard from "./StatsCard"
import { useAppSelector } from "../hooks/redux"

export default function Dashboard() {
  const { tasks } = useAppSelector((state) => state.tasks)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const inProgressTasks = tasks.filter((task) => !task.completed).length
  const overdueTasks = 0 // Could be calculated based on due dates

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid  size={{xs:12,sm:12}}>
          <Grid container spacing={3}>
            {/* Stats Cards */}
            <Grid  size={{xs:12}}>
              <Grid container spacing={2}>
                <Grid size={{xs:12,sm:6}}>
                  <StatsCard title="Total Tasks" value={totalTasks.toString()} change="+12%" color="primary" />
                </Grid>
                <Grid size={{xs:12,sm:6}}>
                  <StatsCard title="Completed" value={completedTasks.toString()} change="+8%" color="secondary" />
                </Grid>
                <Grid size={{xs:12,sm:6}}>
                  <StatsCard title="In Progress" value={inProgressTasks.toString()} change="+2%" color="warning" />
                </Grid>
                <Grid size={{xs:12,sm:6}}>
                  <StatsCard title="Overdue" value={overdueTasks.toString()} change="-1%" color="error" />
                </Grid>
              </Grid>
            </Grid>

      
          </Grid>
        </Grid>

      </Grid>
    </Box>
  )
}
