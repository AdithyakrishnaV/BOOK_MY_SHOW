import React from 'react'

//Components
import MovieNavbar from '../components/Navbar/movie.Navbar.component';

 const MovieLayout = (props) => {
    return ( 
        <>
          <MovieNavbar />
          {props.children}
        </>
        );
};

export default MovieLayout;
