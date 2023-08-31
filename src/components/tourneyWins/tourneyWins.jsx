import React from "react";
import Carousel from '../carousel/carousel';
// import { tournyWinsList } from "../../firebase/firebase.utils";

import "./tourneyWins.scss";

const images = require.context('../../assets/Tourney wins/')
const tournyWinsList = images.keys().map(image => images(image));

const TourneyWins = () => {
   
  return (
    <div className="tourneyWins">
      <Carousel imgUrls={tournyWinsList} />
      <div className="subtitle">
        <h1>
          When It All Comes Together!
        </h1>
      </div>
    </div>
  );
};
export default TourneyWins;
