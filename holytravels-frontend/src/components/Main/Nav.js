import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import holyLogo from "../../assets/holy travels-logos/OIG1.jpg"
export const Nav = () => {
  return (
    <Stack
      direction={"row"}
      sx={{ justifyContent: "space-between", alignItems: "center" }}
      padding={"20px"}
    >
      <Stack>
        <img src={holyLogo} alt="" width="100px" />
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <NavLink to="/tourism">
          <Typography variant="body1" sx={{ color: "black" }}>
            Tourism
          </Typography>
        </NavLink>
        <NavLink to="/umrahhajjguide">
          <Typography variant="body1" sx={{ color: "black" }}>
            Umrah/Hajj Guide
          </Typography>
        </NavLink>
        <NavLink to="/login">
          <Typography variant="body1" sx={{ color: "black" }}>
            Login
          </Typography>
        </NavLink>
      </Stack>
    </Stack>
  );
};
