import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../../public/octavian-dan-b21Ty33CqVs-unsplash.jpg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent  style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <Typography gutterBottom variant="h5" component="div"
        style={{fontWeight:'400'}}
       >
          Lizard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open</Button>
        <Button size="small">Share</Button>
        <Button size="small">Donate</Button>

      </CardActions>
    </Card>
  );
}