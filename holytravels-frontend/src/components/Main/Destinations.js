import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ExploreTourCard from "../../utils/Cards/Main/ExploreTourCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import React, { useState } from 'react';

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
  const beigeColor = "#F5F5DC"; // Beige color code

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: beigeColor, // Set background color to beige
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [numAdventurousPlaces, setNumAdventurousPlaces] = useState(3);
  const [numCulturalPlaces, setNumCulturalPlaces] = useState(3);
  const [numNaturalWonders, setNumNaturalWonders] = useState(3);

  const adventurousPlaces = [
    { img: trango, name: "Trango Towers" },
    { img: anso, name: "Derawar Fort" },
    { img: fairy, name: "Fairy Meadows" },
  ];

  const culturalPlaces = [
    { img: badshahiMosque, name: "Badshahi Mosque" },
    { img: wazir, name: "Wazir Khan" },

    { img: faisal, name: "Faisal Mosque" },
    { img: lahorefort, name: "Lahore Fort" },
    { img: mohenjo, name: "Mohenjo Daro" },
    { img: anso, name: "Derawar Fort" },
  ];

  const naturalWonders = [
    { img: deosai, name: "Deosai Plains" },
    { img: trango, name: "Trango Towers" },
    { img: fairy, name: "Fairy Meadows" },
  ];

  const handleViewMoreAdventurousPlaces = () => {
    setNumAdventurousPlaces(adventurousPlaces.length);
  };

  const handleViewMoreCulturalPlaces = () => {
    setNumCulturalPlaces(culturalPlaces.length);
  };

  const handleViewMoreNaturalWonders = () => {
    setNumNaturalWonders(naturalWonders.length);
  };

  return (
    <Stack direction={"column"} justifyContent={"center"} padding={"5%"} style={{ backgroundColor: beigeColor }}>
      <Stack alignItems={"center"}>
        <Typography variant="h4" fontWeight={600} alignItems={"center"}>
          Explore Natural Wonders
        </Typography>
      </Stack>
      <Stack marginTop={"50px"}>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {naturalWonders.slice(0, numNaturalWonders).map((place) => (
            <Grid item xs={4} key={place.name}>
              <ExploreTourCard img1={place.img} name={place.name} />
            </Grid>
          ))}
        </Grid>
        {numNaturalWonders < naturalWonders.length && (
          <Stack alignItems="center">
            <Button variant="contained" onClick={handleViewMoreNaturalWonders} marginTop={'20px'}>
              View More
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack>
        <Typography variant="h4" fontWeight={600} alignItems={"center"} textAlign={"center"} marginTop={'20px'}>
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
          {culturalPlaces.slice(0, numCulturalPlaces).map((place) => (
            <Grid item xs={4} key={place.name}>
              <ExploreTourCard img1={place.img} name={place.name}  style={{ width: '250px', height: '250px' }} />
            </Grid>
          ))}
        </Grid>
        {numCulturalPlaces < culturalPlaces.length && (
          <Stack alignItems="center">
            <Button variant="contained" style={{  marginTop:'20px'}} onClick={handleViewMoreCulturalPlaces}>
              View More
             
            </Button>
            
          </Stack>
        )}
      </Stack>
      <Stack>
        <Typography variant="h4" fontWeight={600} alignItems={"center"}textAlign={"center"} marginTop={'20px'}>
          Explore Adventurous Places
        </Typography>
      </Stack>
      <Stack marginTop={"100px"}>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {adventurousPlaces.slice(0, numAdventurousPlaces).map((place) => (
            <Grid item xs={4} key={place.name}>
              <ExploreTourCard img1={place.img} name={place.name} />
            </Grid>
          ))}
        </Grid>
        {numAdventurousPlaces < adventurousPlaces.length && (
          <Stack alignItems="center">
            <Button variant="contained" onClick={handleViewMoreAdventurousPlaces} marginTop={'20px'}>
              View More
             
            </Button>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};