import React, { Component } from 'react';
import ImageSlide from '../imageSlide/imageSlide';
import Arrow from '../arrow/arrow'

import './carousel.scss'


const images = require.context("../../assets", true);

const imgUrls = [
  images(`./Chloe_1st_dinger.jpg`),
  images(`./Chloe_2cnd_dinger.jpg`),
  images(`./JenniferGriffin.jpg`),
  images(`./MadusonZiegler.jpg`)
];

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }


  render() {

    return (
      <div className="carousel">
        <Arrow
          direction='left'
          clickFunction={this.previousSlide}
          glyph='&#9664;' />
        
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
        {/* <img src={imgsrc1} alt="first" /> */}
        
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph='&#9654;' />
      </div>
    );
  }
}

export default Carousel;