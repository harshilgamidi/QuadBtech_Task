import React from 'react'
import MovieCard from './MovieCard'
import movie1 from '../Images/movie1.jpg';
import { Typography } from '@material-ui/core';
import  { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <>
    <Navbar/>
    <Typography variant="h3" component="h2" style={{fontFamily:'fantasy',color:'#3f51b5',marginBottom:10,marginLeft:10}}>
        Movies List
    </Typography>

    {data ? (
        <div>
          {data.map((item) => (
             <MovieCard key={item.id}
             id = {item.show.id}
             image={item.show.image.medium}
             title={item.show.name}
             rating={item.show.rating}
             genre={item.show.genres}
             status={item.show.status}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

   
   
    </>
  )
}

export default Home;
