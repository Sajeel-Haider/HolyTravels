import { Box } from "@mui/material";
import SigninCard from "../../components/Signup/signupcard";
import * as React from 'react';
import useScreenSize from "../../screensize";

export default function Signin(){
  
    let screensize = useScreenSize();

  return (
    <>
    <Box sx={{width: screensize.width , height : screensize.height , justifyContent:'center' , alignItems:'center' , display : 'flex'} }>
    <SigninCard  />
    </Box>
    </>
  );
};