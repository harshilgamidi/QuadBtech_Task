import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MovieCard from './Components/MovieCard';
import Movie from './Components/Movie';
import Forms from './Components/Forms';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path = "/booking/:id" element = {<Forms/>}/>
    </Routes>
  </Router>
  );
}

export default App;
