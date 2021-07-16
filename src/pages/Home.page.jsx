import React from "react";

//Coponents
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.components";

const HomePage  = () => {
    return (
        <>
          <div className="container mx-auto px-12">
            <h1 className="text-2xl font-bold text-gray-800 my-3">
              The best of Entertainment
            </h1>  
            <EntertainmentCardSlider />
          </div>
        </>
    );
};

export default HomePage;