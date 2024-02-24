import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const Header = () => {
  return (
    <Stack direction={"row"}>
      <Stack width={"50%"} padding={"10%"}>
        <Stack spacing={3}>
          <Typography variant="h3">Holy Travels</Typography>
          <Typography variant="body1">
            Explore religious places & guidelines for Hajj and Umrah
          </Typography>
        </Stack>
      </Stack>
      <Stack width={"50%"} padding={"10%"}>
        <img src="" alt="" />
      </Stack>
    </Stack>
  );
};
