import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { TiArrowDown } from "react-icons/ti";
export const ReligiousGuideCard = ({ name }) => {
  return (
    <Stack
      padding="2%"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={3}
    >
      <Paper elevation={6} sx={{ padding: "5%" }}>
        <Stack direction={"row"}>
          <Typography variant="h6">{name}</Typography>
          <TiArrowDown />
        </Stack>
      </Paper>
    </Stack>
  );
};
