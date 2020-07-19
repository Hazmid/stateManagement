import React,{useState, createContext} from 'react';

//exporting both functions seperately 

//exported to any compnt that wants to use the data
export const MovieContext = createContext();

//exported to app.js
export const MovieProvider = props => {
  //useState
  const [movies, setMovies] = useState([
    {
        name: 'Harry Potter',
        price:'$10',
        id: 23124
    },
    {
        name: 'Game of Thrones',
        price:'$10',
        id: 2566124
    },
    {
        name: 'Inception',
        price:'$10',
        id: 23524
    }
  ]);

  
  return(
    //MovieContext created and exported above// the value is available on any page that imports useContext and MovieContext
    <MovieContext.Provider value={[ movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );

}

 