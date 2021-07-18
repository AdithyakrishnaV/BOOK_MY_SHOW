import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.pages";
import Plays from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" excat component={Movie} />
      <DefaultHOC path="/plays" excat component={Plays} />
    </>
  );
};

export default App;

//px left and right padding
//py top and bottom padding