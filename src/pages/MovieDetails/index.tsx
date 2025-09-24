import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../api/movieApi";
import {
  Box,
  Typography,
  Chip,
  Button,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetMovieDetailsQuery(id || "");

  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );

  if (isError)
    return <Typography color="error">Failed to load movie details.</Typography>;
  if (!data) return <Typography>No data found.</Typography>;

  const poster = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        minHeight: "100vh",
        bgcolor: "gray",
      }}
    >
      {/* Backdrop Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "60vh",
          backgroundImage: `url(${backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
          zIndex: -1,
        }}
      />

      <Grid container spacing={4} sx={{ px: 4, pt: 8 }}>
        {/* Poster */}
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <Card
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 6,
            }}
          >
            <CardMedia
              component="img"
              image={poster}
              alt={data.title}
              sx={{ height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>

        {/* Details */}
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          <CardContent sx={{ p: 0 }}>
            <Typography variant="h3" fontWeight="bold">
              {data.title}
            </Typography>
            {data.tagline && (
              <Typography variant="subtitle1" color="gray" sx={{ mb: 2 }}>
                "{data.tagline}"
              </Typography>
            )}

            {/* Chips for genres */}
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
              {data.genres?.map((genre: any) => (
                <Chip
                  key={genre.id}
                  label={genre.name}
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                />
              ))}
            </Box>

            {/* Movie Info */}
            <Typography variant="body1" sx={{ mb: 2 }}>
              {data.overview}
            </Typography>

            <Typography variant="body2" color="white">
              Release Date: {data.release_date} | Runtime: {data.runtime} mins |
              Rating: {data.vote_average.toFixed(1)} / 10 ({data.vote_count}{" "}
              votes)
            </Typography>

            {/* Homepage Button */}
            {data.homepage && (
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                href={data.homepage}
                target="_blank"
              >
                Visit Official Site
              </Button>
            )}

            {data.imdb_id && (
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3, ml: 1 }}
                href={`https://www.imdb.com/title/${data.imdb_id}/`}
                target="_blank"
              >
                Visit IMDb
              </Button>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetails;
