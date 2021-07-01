import React from "react";
import Carousel from '../../components/carousel/carousel';
import { imgUrls } from './images';


import "./celebrate.scss";

const Celebrate = () => {
  return (
    <div className="celebrate">
      <Carousel imgUrls={imgUrls}/>
      <div className="subtitle">
        <h1>
          She's a HOME RUN HITTER and you're never gonna get her!
        </h1>
      </div>
    </div>
  );
};
export default Celebrate;
