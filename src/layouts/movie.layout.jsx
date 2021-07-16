import React from 'react'

//Components
import Navbar from "../components/Navbar/navbar.components";

 const MovieLayout = (props) => {
    return ( 
        <>
          <Navbar />
          {props.children}
        </>
        );
};

export default MovieLayout;
