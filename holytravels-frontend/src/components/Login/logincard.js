import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";


export default function LoginCard() {
  return (
    <Box sx={{ flexDirection : 'column'  , Width : 10 , display : 'flex' , gap : 2 }} >
    <Card sx={{ border : 1 , borderColor : '#b49164' , padding : "10%" ,  }}>
      <CardContent sx={{flexDirection : 'column' , display : 'flex' , justifyContent : 'center' , alignItems : 'center', gap : 2 , marginBottom : 3 }}>
      <Typography gutterBottom variant="h5" component="div">
          Holy Travels
        </Typography>
        <TextField variant='outlined' label="UserName" ></TextField>
        <TextField variant='outlined' label="Password" ></TextField>
      </CardContent>
      <CardActions sx={{  marginBottom : 2}} >
        <Button variant="contained" size='large' sx={{backgroundColor : '#b49164' , minWidth : 1 }} >Log in </Button>
      </CardActions>
    </Card>
    <Card sx={{marginTop : 2  , border : 1 , borderColor : '#b49164'}}>
        <CardContent>
            <Typography>
              Don't have an account?
            </Typography>
        </CardContent>
    </Card>
    </Box>
  );
}