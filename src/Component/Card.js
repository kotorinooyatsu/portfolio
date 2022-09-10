import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';
import data from './../product-list'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, m: "5%" }}>
      <Link href={data[0].url} target='_blank' underline='none' color='black'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data[0].image}
            alt={data[0].alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card >
  );
}
