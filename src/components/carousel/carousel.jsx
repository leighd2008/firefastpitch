import React, { Component } from 'react';
import ImageSlide from '../imageSlide/imageSlide';

import './carousel.scss'

const images = require.context("../../assets", true);

const imgUrls = [
  images(`./Hailie_1st_dinger.jpg`),
  images(`./Avery.jpg`),
  images(`./Cloe_1st_dinger.jpg`),
  images(`./Cloe_2cnd_dinger.jpg`),
  images(`./JenniferGriffin.jpg`),
  images(`./MadisonZiegler.jpg`),
  images(`./Cloe_3rd_dinger.jpg`),

];

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      intervalId: ''
    };
    this.setNextImage = this.setNextImage.bind(this);
  }

  // componentDidUpdate() {
  //   setInterval(() => { this.setNextImage(); }, 3000);
  // }

  componentDidMount() {
    var intervalId = setInterval(this.setNextImage, 3000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
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