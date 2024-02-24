import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';;

export default function LoginCard() {
  return (
    <Card >
      <CardContent sx={{flexDirection : 'column' , display : 'flex' , justifyContent : 'space-between' , gap : 2}}>
        <TextField variant='outlined' label="UserName" ></TextField>
        <TextField variant='outlined' label="Password" ></TextField>
      </CardContent>
      <CardActions sx={{justifyContent : 'center' }} >
        <Button variant="contained" >Share</Button>
      </CardActions>
    </Card>
  );
}