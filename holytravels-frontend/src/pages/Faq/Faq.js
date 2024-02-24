import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FaqCard } from "../../utils/Cards/Faq/FaqCard";

export const Faq = () => {
  const [cardStates, setCardStates] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const toggleCardState = (index) => {
    setCardStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Stack padding="5%">
      <Typography variant="h6">FAQ</Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {[0, 1, 2, 3].map((index) => (
            <Grid item xs={6} key={index}>
              <FaqCard
                question={FAQ_DATA[index].question}
                content={FAQ_DATA[index].question}
                isOpen={cardStates[index]}
                onToggle={() => toggleCardState(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

const FAQ_DATA = [
  {
    question:
      "Is it possible to move between the cities of the Kingdom with the Umrah Visa?",
    content:
      "Yes, the Umrah Visa enables the mu'tamir to move between Makkah al-Mukarramah, Medina, and all the cities of the Kingdom during the period of permitted stay.",
  },
  {
    question: "Can a mu'tamir enter and leave the Kingdom by different means?",
    content: "Yes, he/she can.",
  },
  {
    question: "Who is eligible for the transit/stopover visa?",
    content:
      "Anyone can get a transit/stopover visa. Those passing through Saudi on their way to another destination and flying on Saudia or Flynas are eligible for special offers; those flying on another carrier should apply for a standard transit/stopover visa.",
  },
  {
    question:
      "Is it possible to move between the cities of the Kingdom with the Umrah Visa?",
    content:
      "Yes, the holders of a (visit, tourism, work) visa can perform Umrah.",
  },
];
