import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ReligiousGuideCard } from "../../utils/Cards/Main/ReligiousGuide/ReligiousGuideCard";

export const ReligiousGuide = () => {
  return (
    <Stack>
      <Stack
        padding={"2%"}
        alignItems={"center"}
        sx={{ backgroundColor: "#ccb393", borderRadius: "10px" }}
      >
        <Stack
          padding={"2%"}
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
          marginBottom={"20px"}
        >
          <Typography variant="h6">Know More</Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={4}
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <Stack
            padding={"10%"}
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <Typography variant="h6">Umrah</Typography>
          </Stack>
          <Stack
            padding={"10%"}
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <Typography variant="h6">Hajj</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        spacing="3"
        sx={{
          borderRadius: "20px",
          margin: "0% 20%",
        }}
      >
        <ReligiousGuideCard name={"View Requirments"}></ReligiousGuideCard>
        <ReligiousGuideCard name={"Travel Preparations"}></ReligiousGuideCard>
        <ReligiousGuideCard name={"Religious Rituals"}></ReligiousGuideCard>
      </Stack>
    </Stack>
  );
};
