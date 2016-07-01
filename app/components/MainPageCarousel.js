
import React, {Component} from 'react';
import Slider from 'react-slick';

class MainPageCarousel extends Component{
  render(){
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return(
      <Slider {...settings}>
        

      </Slider>
    );
  }
}

export default MainPageCarousel;