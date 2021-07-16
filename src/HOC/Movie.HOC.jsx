import React from "react";
import { Route } from "react-router-dom";

//layout
import MovieLayout from "../layouts/movie.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
    return (
        <>
          <Route {...rest}
           component={(props) => (
               <MovieLayout>
                   <Component {...props} />
               </MovieLayout>
            )} 
           />
        </>  
    );
};

export default MovieHOC;