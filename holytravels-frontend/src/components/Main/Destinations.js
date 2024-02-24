import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ExploreTourCard from "../../utils/Cards/Main/ExploreTourCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import badshahiMosque from "../../assets/badshahiMosque.jpg";
import faisal from "../../assets/faisal.jpg";
import lahorefort from "../../assets/lahore_fort.jpg"
import deosai from "../../assets/deosai.jpg"
import anso from "../../assets/derawar_fort.jpg"
import fairy from"../../assets/fairy_medows.jpg"
import mohenjo from "../../assets/mohenjo_daro.jpg"
import wazir from "../../assets/wazir_khan.jpg"
import trango from "../../assets/trango_towers.jpg"
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
      <Stack alignItems={"center"}>
        <Typography variant="h4" fontWeight={600}>
          Explore Natural Wonders
        </Typography>
      </Stack>
      `<Stack marginTop={"50px"}>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <ExploreTourCard
              img1={trango}
              name={"=Tranhgo"}
            ></ExploreTourCard>
          </Grid>
          <Grid item xs={6}>
            <ExploreTourCard
              img1={anso}
              name={"=Tranhgo"}
            ></ExploreTourCard>
          </Grid>
          <Grid item xs={6}>
            <ExploreTourCard
              img1={fairy}
              name={"=Tranhgo"}
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
      <Stack>
        <Typography variant="h4" fontWeight={600} alignItems={"center"}>
          Explore Historical Places
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
              img1={wazir}
              name={"Faisal Mosque"}
            ></ExploreTourCard>
          </Grid>
          <Grid item xs={6}>
            <ExploreTourCard
              img1={faisal}
              name={"Faisal Mosque"}
            ></ExploreTourCard>
          </Grid>
          <Grid item xs={6}>
            <ExploreTourCard
              img1={mohenjo}
              name={"Faisal Mosque"}
            ></ExploreTourCard>
          </Grid>
        </Grid>
      </Stack>
      <Stack>
        <Typography variant="h4" fontWeight={600} alignItems={"center"}>
          Explore Adventurous Places
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
      <Stack>
        <Typography variant="h4" fontWeight={600} alignItems={"center"}>
          Explore Cultural Places
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
              img1={mohenjo}
              name={"Lahore Fort"}
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