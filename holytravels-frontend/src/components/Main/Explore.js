import { Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";

export const Explore = () => {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
        justifyContent: "center",
      }}
    >
      <Paper elevation={3}></Paper>
      <Paper elevation={3}></Paper>
    </Box>
  );
};
