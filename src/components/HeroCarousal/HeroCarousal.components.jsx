import React from "react";
import HeroSlider from "react-slick";

// Components
import { NextArrow, PrevArrow } from "./Arrows.components";

import { BiImages } from "react-icons/bi";


const HeroCarousal = () => {

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

      const images =["https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
                   "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
                  "https://images.unsplash.com/photo-1522879943092-d2b0e4e1da17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80",
                  "https://images.unsplash.com/photo-1583853168794-485e809166d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
                  "https://images.unsplash.com/photo-1514168757508-07ffe9ae125b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                ];
    return (
    <>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
          {images.map((image) =>( 
            <div className="w-full h-56  md:h-96 py-3">
                <img src={image} alt="testing" className="w-full h-full "/>
            </div>
          ))}
      </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) =>( 
            <div className="w-full h-80 px-2 py-3">
                <img src={image} alt="testing" className="w-full h-full"
                />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;