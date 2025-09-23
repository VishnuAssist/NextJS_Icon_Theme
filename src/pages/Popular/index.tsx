import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import { moviesApi, useGetMoviesQuery } from "../../api/movieApi"; // ✅ SAME path
import MoviesCard from "../../components/MovieCard";

export default function MoviePage() {
  const { data: movieData, isLoading, isError, error } = useGetMoviesQuery();

  console.log("Movie data:", movieData);
  console.log("MoviePage moviesApi reducerPath:", moviesApi.reducerPath);
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
          <>
            <Grid container spacing={2}>
              {movieData.results.map((movie: any) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <MoviesCard
                    title={movie.title}
                    image={movie.poster_path}
                    description={movie.overview}
                    rating={movie.vote_average}
                    outOff={movie.vote_count}
                    link={`/movies/${movie.id}`}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}
