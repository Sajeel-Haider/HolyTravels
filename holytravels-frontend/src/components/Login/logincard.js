import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';;

export default function LoginCard() {
  return (
    <Card sx={{ maxWidth: 345 , justifyContent:'center' , alignItems:'center'}}>
      <CardContent>
        <TextField variant='outlined' label="UserName"></TextField>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}