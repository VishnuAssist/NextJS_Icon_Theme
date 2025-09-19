import { Card, CardContent, Typography, Box } from "@mui/material"
import { TrendingUp, TrendingDown } from "@mui/icons-material"

interface StatsCardProps {
  title: string
  value: string
  change: string
  color: "primary" | "secondary" | "warning" | "error"
}

export default function StatsCard({ title, value, change, color }: StatsCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="h4" fontWeight={700} color={`${color}.main`}>
            {value}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: isPositive ? "success.main" : "error.main",
            }}
          >
            {isPositive ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
            <Typography variant="caption" fontWeight={600}>
              {change}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
