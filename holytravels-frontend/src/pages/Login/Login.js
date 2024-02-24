import { Box } from "@mui/material";
import LoginCard from "../../components/Login/logincard";
import * as React from 'react';
import useScreenSize from "../../screensize";

export default function Login(){
  
    let screensize = useScreenSize();

  return (
    <>
    <Box sx={{width: screensize.width , height : screensize.height , justifyContent:'center' , alignItems:'center' , display : 'flex'} }>
    <LoginCard  />
    </Box>
    </>
  );
};