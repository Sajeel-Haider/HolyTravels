import { CardMedia, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";
import KhanaQaba from "../../assets/KhanaQaba.jpeg";

export const Explore = () => {
  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Paper elevation={3}>
        <CardMedia
          component="img"
          height="140"
          image={KhanaQaba}
          alt="green iguana"
        />
      </Paper>
      <Paper elevation={3}>
        <CardMedia
          component="img"
          height="140"
          image={KhanaQaba}
          alt="green iguana"
        />
      </Paper>
    </Box>
  );
};
