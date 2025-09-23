import { Box, Container, Typography } from "@mui/material"
import Header from "../../components/Header"
import { useGetMoviesQuery } from "@/api/movieApi"

export default function MoviePage() {
  const { data: movieData, isLoading, isError, error } = useGetMoviesQuery()

  console.log("Movie data:", movieData)

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
        {isLoading && <Typography>Loading movies...</Typography>}
        {isError && (
          <Typography color="error">
            Failed to fetch movies: {JSON.stringify(error)}
          </Typography>
        )}
        {movieData && (
          <Typography>
            {movieData.results.map((movie) => movie.title).join(", ")}
          </Typography>
        )}
      </Container>
    </Box>
  )
}
