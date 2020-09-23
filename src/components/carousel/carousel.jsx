import React, { Component } from 'react';
import ImageSlide from '../imageSlide/imageSlide';

import './carousel.scss'

const images = require.context("../../assets", true);

const imgUrls = [
  images(`./Chloe_1st_dinger.jpg`),
  images(`./Chloe_2cnd_dinger.jpg`),
  images(`./JenniferGriffin.jpg`),
  images(`./MadisonZiegler.jpg`),
  images(`./Chloe_3rd_dinger.jpg`)
];

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.setNextImage = this.setNextImage.bind(this);
  }

  componentDidUpdate() {
    setTimeout(this.setNextImage, 3000);
  }

  setNextImage() {
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
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
      </div>
    );
  }
}

export default Carousel;