import { CardMedia, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import KhanaQaba from "../../assets/KhanaQaba.jpeg";
import wazir_khan from "../../assets/wazir_khan.jpg";
import { NavLink } from "react-router-dom";

export const Explore = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "5%",
        justifyContent: "center",
      }}
    >
      <Stack width={"50%"}>
        <NavLink to="/religiousguide">
          <CardMedia
            component="img"
            height="100"
            image={KhanaQaba}
            alt="green iguana"
          />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              transform: "translateY(-150%)",
              background: "white",
              borderRadius: "20px",
            }}
            paddingLeft={"10px"}
            paddingRight={"10px"}
          >
            Religious Places
          </Typography>
        </NavLink>
      </Stack>

      <Stack width={"50%"}>
        <NavLink to="/historicalplaces">
          <CardMedia
            component="img"
            height="100"
            image={wazir_khan}
            alt="green iguana"
          />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              transform: "translateY(-150%)",
              background: "white",

              borderRadius: "20px",
            }}
            paddingLeft={"10px"}
            paddingRight={"10px"}
          >
            Historical Places
          </Typography>
        </NavLink>
      </Stack>
    </Box>
  );
};
