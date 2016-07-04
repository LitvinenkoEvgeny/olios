import React, {Component} from 'react';

import Carousel from './MainPageCarousel';


export default class MainPageView extends Component{
  // componentDidMount(){
  //   this.refs.sliderContainer
  // }
  render(){
    return (
      <div ref="sliderContainer" className="main-page">
          { /*
          <div className="header">
            <div className="slider-shadow">newest</div>
            <h1>Olios</h1>
            <h3>newest furniture shop template</h3>
            <div className="btn btn-blue">view more</div>
          </div>
          */}
          <Carousel />
        </div>
    );
  }
}