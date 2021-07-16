

//Coponents
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.components";
import Poster from "../components/Poster/poster.components";
import PosterSlider from "../components/PosterSlider.components.jsx/posterslider.components";

//Config
import TempPosters from "../config/TempPosters.config";

const HomePage  = () => {
    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="container mx-auto px-16">
            <h1 className="text-2xl font-bold text-gray-800 my-3">
              The best of Entertainment
            </h1>  
            <EntertainmentCardSlider />
          </div>
          <div className="bg-bms-800 py-12"> 
            <div className="container mx-auto px-20 flex flex-col gap-10">
                <div className="hidden md:flex">
                    <img 
                       src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                       alt="Rupay"
                       className="w-full h-full"
                       />
                </div>
                < PosterSlider 
                   images={TempPosters} 
                   title="Premieres" 
                   subtitle="Brand new releases every friday"
                   isDark
                />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4  my-8">
        < PosterSlider 
            images={TempPosters} 
            title="Online Streaming events" 
            isDark={false}
        />
        </div>
        <div className="container mx-auto px-4 my-8">
        < PosterSlider 
            images={TempPosters} 
            title="Outdoor events" 
            isDark={false}
        />
        </div>
      </>
    );
};

export default HomePage;