import axios from 'axios';
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

//Components
import MovieNavbar from '../components/Navbar/movie.Navbar.component';

//Context
import { MovieContext } from '../Context/movie.context'; 

 const MovieLayout = (props) => {
  const {id} = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
       const getMovieData = await axios.get(`/movie/${id}`);
       setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

    return ( 
        <>
          <MovieNavbar />
          {props.children}
        </>
        );
};

export default MovieLayout;
