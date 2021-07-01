import React from "react";
import Carousel from '../carousel/carousel';

import { imgUrls } from './images';



import "./tourneyWins.scss";

const TourneyWins = () => {
  return (
    <div className="tourneyWins">
      <Carousel imgUrls={imgUrls} />
      <div className="subtitle">
        <h1>
          When It All Comes Together!
        </h1>
      </div>
    </div>
  );
};
export default TourneyWins;
