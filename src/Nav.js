import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {

  const [movies, setMovies] = useContext(MovieContext);
  //context used cos of movies.length
  return(
    <div className= "nav">
      <h3>Abdulhamid</h3>
      <p>List of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;