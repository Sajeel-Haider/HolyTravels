import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { TiArrowDown } from "react-icons/ti";

export const FaqCard = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack
      padding="2%"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={3}
      sx={{ height: isOpen ? "auto" : "8rem" }}
      onClick={toggleCard}
      style={{ cursor: "pointer" }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "70%",
          backgroundColor: "#ccb393",
          padding: "5%",
          borderRadius: "20px",
          textOverflow: "none",
        }}
      >
        <Stack direction={"row"} alignItems="center">
          <Typography variant="body1">{question}</Typography>
          <TiArrowDown />
        </Stack>
      </Paper>
      {isOpen && <Typography variant="body1">{content}</Typography>}
    </Stack>
  );
};
