import React,{useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

//useContext and MovieContext imported so context can be used on this compnt

const MovieList = () => {

  //<MovieContext.Provider's  values on context compo set as useContext(MovieContext) for use here
  const [movies, setMovies] = useContext(MovieContext);

  return(
    //key={movie.id} to remove warning in log
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} /> 
      ))} 
    </div>
  );
};

export default MovieList;