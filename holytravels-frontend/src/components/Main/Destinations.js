import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ExploreTourCard from "../../utils/Cards/Main/ExploreTourCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import badshahiMosque from "../../assets/badshahiMosque.jpg";
import faisal from "../../assets/faisal.jpg";
export const Destinations = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Stack direction={"column"} justifyContent={"center"} padding={"5%"}>
      <Stack>
        <Typography variant="h4" fontWeight={600}>
          Explore Top Religious Destinations for Tourism
        </Typography>
      </Stack>
      <Stack marginTop={"50px"}>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <ExploreTourCard
              img1={badshahiMosque}
              name={"Badshahi Mosque"}
            ></ExploreTourCard>
          </Grid>
          <Grid item xs={6}>
            <ExploreTourCard
              img1={faisal}
              name={"Faisal Mosque"}
            ></ExploreTourCard>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};
