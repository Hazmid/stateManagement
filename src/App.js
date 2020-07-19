import React from 'react';
import './App.css';
import MovieList from './movieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import Addmovie from './AddMovies';

function App() {
  return (
    //everything wrapped around <MovieProvider> because of context
    <MovieProvider>
        <div className="App">
            <Nav/>
            <Addmovie />
            <MovieList />
        </div>
    </MovieProvider>
  );
}

export default App;
