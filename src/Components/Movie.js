import React, { useEffect, useState } from 'react';
import { Modal,TextField,Button,Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 10,
    height: 800,
  },
  media: {
    height: 400,
    width:400,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  
});

const Movie = () => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(useParams())
  const [movieDetails, setMovieDetails] = useState(null);
  console.log(id)
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { image, title, summary ,rating, genre, status } = movieDetails;
  console.log(movieDetails)
  return (
    <>
     <Button style={{backgroundColor:'#3f51b5',fontWeight:'bold',color:'whitesmoke',marginLeft:'5%',marginBottom:30,marginTop:20}} className={classes.button} component={Link}  to="/">Back</Button>

    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image.medium} />
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h4" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div>
          <Typography variant="body2" color="textSecondary">
            Rating: {rating.average}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Status: {status}
          </Typography>
          <Button style={{backgroundColor:'#3f51b5',fontWeight:'bold',color:'whitesmoke',marginLeft:'30%'}} className={classes.button} component={Link}  to={`/booking/${id}`}>Book Now</Button>
        </div>
      </CardContent>
    </Card>
    </>
  );
};

export default Movie;
