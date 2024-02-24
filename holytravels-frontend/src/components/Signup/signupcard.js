import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { Link } from '@mui/material';


export default function SigninCard() {
  return (
    <Box sx={{ flexDirection : 'column'  , display : 'flex' , gap : 2 }} width={400} height={615}>
    <Card sx={{ border : 1 , borderColor : '#b49164' , padding : "10%" ,  }}>
      <CardContent sx={{flexDirection : 'column' , display : 'flex' , justifyContent : 'center' , alignItems : 'center', gap : 2 , }}>
      <Typography gutterBottom variant="h5" component="div" sx={{color: '#b49164'}}>
          Holy Travels
        </Typography>
        <TextField variant='outlined' label="UserName" 
        ></TextField>
        <TextField variant='outlined' label="Email" ></TextField>
        <TextField variant='outlined' label="City" ></TextField>
        <TextField variant='outlined' label="address" ></TextField>
        <TextField variant='outlined' label="Phone " ></TextField>
        <TextField variant='outlined' label="Password" ></TextField>
       
      </CardContent>
      <CardActions sx={{  marginBottom : 2}} >
      <Button variant="contained" size='large' sx={{backgroundColor : '#b49164' , minWidth : 1 }} >Sign in </Button>
      </CardActions>
    </Card>
    </Box>
  );
}