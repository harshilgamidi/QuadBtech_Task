import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    marginBottom: 20,
    marginTop:10,
    height:220
  },
  media: {
    width: 160,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
});

const MovieCard = ({ id,image, title, rating, genre, status }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image}  />
      <CardContent className={classes.content}>
        <Typography variant="h4" component="h2" className={classes.title} style={{color:'#3f51b5',fontWeight:'bolder'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{color:'#3f51b5',fontWeight:'200',marginBottom:4}}>
          RATING : {rating['average']}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{marginBottom:5}}>
        {genre.map((gen, index) => (
          <li key={index} style={{color:'grey'}}>{gen}</li>
        ))}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{color:'#3f51b5',fontWeight:'bolder'}}>
          {status}
        </Typography>
      </CardContent>
      <Button style={{backgroundColor:'#3f51b5',fontWeight:'bold',color:'whitesmoke'}}  component={Link}  to={`/movie/${id}`}
>Know More</Button>
    </Card>
  );
};

export default MovieCard;
