import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiImages } from "react-icons/bi";


const HeroCarousal = () => {

    const settings = {
        arrow: true,
        centerMode: true,
        centerPadding: "160px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images =["https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
                   "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
                  "https://images.unsplash.com/photo-1522879943092-d2b0e4e1da17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80",
                  "https://images.unsplash.com/photo-1583853168794-485e809166d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
                  "https://images.unsplash.com/photo-1514168757508-07ffe9ae125b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                ];
    return <>
      <HeroSlider {...settings}>
          {images.map((image) =>( 
            <div className="w-20 h-80">
                <img src={image} alt="testing" className="w-full h-full"/>
            </div>
          ))}
      </HeroSlider>
    </>
};

export default HeroCarousal;