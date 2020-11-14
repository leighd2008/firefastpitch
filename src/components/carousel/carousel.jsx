import React, { Component } from 'react';
import ImageSlide from '../imageSlide/imageSlide';

import './carousel.scss'

const images = require.context("../../assets/Homeruns", true);

const imgUrls = [
  images(`./Cloe_4th_dinger_16U_Fall_2020.jpg`),
  images(`./Cloe_2cnd&3rd_dingers_16U_Fall_2020.jpg`),
  images(`./Avery_2cnd&Hailey_1st_dinger_14U_Fall_2020.jpg`),
  images(`./Hailie_1st_dinger_14U_Fall_2020.jpg`),
  images(`./Avery_1st_dinger_14U_Fall_2020.jpg`),
  images(`./Cloe_1st_dinger_16U_Fall_2020.jpg`),
  // images(`./MadisonZiegler_1st_dinger_14U_Spring_2020.jpg`),
  // images(`./JenniferGriffin_1st_dinger_14U_Spring_2020.jpg`),
  images(`./Cloe_2cnd_dinger_14U_Spring_2020.jpg`),
  images(`./Cloe_1st_dinger_14U_Spring_2020.jpg`),

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