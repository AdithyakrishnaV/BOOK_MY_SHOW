import React, {useContext} from "react";
import {GoChevronRight} from "react-icons/go";
 import {
    BiSearch, 
    BiMenu, 
    BiChevronDown, 
    BiShareAlt
 } 
 from "react-icons/bi";

 //Context
import { MovieContext } from "../../Context/movie.context";


const NavSm = () => {
   const { movie } = useContext(MovieContext);
   return (
    <>
      <div className="text-white flex item-center justify-between">
          <div>
              <h4 className="text-xl font-bold">
                  {movie.original_title}
              </h4>
          </div>
          <div className="w-8 h-8">
             <BiShareAlt className="w-full h-full" />
          </div>
      </div>
     </>
   );
};

const NavLg = () => {
    return (
        <>
          <div class="container mx-auto px-4  flex items-center justify-between"> 
              <div className="flex item-center w-1/2 h-8 gap-3">
                    <div className="w-8 h-8">
                        <img 
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full h-8 flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearch />
                        <input 
                            type="search" 
                            className="w-full bg-transparent border-none focus:outline-none" 
                            placeholder="Search for movies, events, Plays, Sports and Activities." 
                        />
                    </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-200 text-xs flex items-center gap-3 hover:text-white cursor-pointer">
                    Kochi<BiChevronDown/>
                </span>
                <button className="bg-red-600 text-white px-2 py-1 text-xs rounded">Sign in</button>
                <div className="w-8 h-8 text-white">
                  < BiMenu className="w-full h-full" />.
                </div>
              </div>
          </div> 
        </>
    );
};

const MovieNavbar = () => {
    return (
      <> 
       <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
           <div className="md:hidden">
               {/*Mobile devices */}
               <NavSm />          
            </div>
           <div className="hidden md:block lg:hidden"> 
               {/*Tab screen */} 
               <NavSm /> 
           </div>
           <div className="hidden w-full lg:flex">
               {/*Large screen*/}
               <NavLg /> 
           </div>
       </nav>
     </>
   );
};

export default MovieNavbar;