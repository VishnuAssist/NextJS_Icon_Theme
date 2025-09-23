import { Card, CardContent, CardMedia, Typography, Box, Rating } from "@mui/material";
import backup from "../../public/placeholder.svg";

interface MoviesCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  outOff: number;
  link: string;
}

export default function MoviesCard({
  image,
  title,
  description,
  rating,
  outOff,
  link,
}: MoviesCardProps) {
  // ✅ Fix string interpolation (was using quotes incorrectly)
  const poster = image ? `https://image.tmdb.org/t/p/original${image}` : backup;

  return (
    <Card
      sx={{
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        height: "100%", // ✅ Ensures cards stretch evenly
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Poster */}
      <CardMedia
        component="img"
        height="180"
        image={poster}
        alt={title}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3, // ✅ Show only 3 lines
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Rating */}
        <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Rating
            value={rating / 2} // ✅ TMDB gives 10 scale, convert to 5-star
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="caption" color="text.secondary">
            {rating.toFixed(1)} / {outOff}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
