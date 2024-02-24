import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import lamp from "../../assets/lamp.jpg";
import { round } from "@floating-ui/utils";
export const Header = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }}>
      <Stack width={{ md: "50%", xs: "100%" }} padding={"10%"}>
        <Stack spacing={3}>
          <Typography variant="h3">Holy Travels</Typography>
          <Typography variant="body1">
            Explore religious places & guidelines for Hajj and Umrah
          </Typography>
        </Stack>
      </Stack>
      <Stack width={{ md: "50%", xs: "100%" }} border={round} padding={"5%"}>
        <img src={lamp} alt="" style={{ border: "20px" }} />
      </Stack>
    </Stack>
  );
};
