import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Components
import { NextArrow, PrevArrow } from "./Arrows.components";

import { BiImages } from "react-icons/bi";

const HeroCarousal = () => {

  const [images, setImages] = useState([]);

  useEffect (() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();
  }, []);  // enpty array for one time api call

    const settingsLG ={ 
      arrow: true, 
      autoplay: true, 
      centerMode: true, 
      centerPadding: "200px", 
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

    return (
    <>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
          {images.map((image) =>( 
            <div className="w-full h-56  md:h-86 py-3">
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full "/>
            </div>
          ))}
      </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) =>( 
            <div className="w-full h-96 px-2 py-3">
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"
                />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;