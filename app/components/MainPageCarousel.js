import React, {Component} from 'react';

import Swiper from 'swiper';
import '../styles/main page/main page view.sass';

class MainPageCarousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(this.refs.slider, {
      loop: true,
      speed: 5000,
      effect: 'slide',
      pagination: '.swiper-pagination',
      paginationClickable: true
    });
  }

  render() {
    return (
      <div ref="slider" className="main-page__slider swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide1">

            <div className="header">
              <div className="slider-shadow">newest</div>
              <h1>Olios</h1>
              <h3>newest furniture shop template</h3>
              <div className="btn btn-blue">view more</div>
            </div>

          </div>
          
          <div className="swiper-slide slide2">


            <div className="header">
              <div className="slider-shadow">newest</div>
              <h1>Oli</h1>
              <h3>Another heading</h3>
              <div className="btn btn-blue">view more</div>
            </div>

          </div>


          <div className="swiper-slide slide3">


            <div className="header">
              <div className="slider-shadow">newest</div>
              <h1>Olios2</h1>
              <h3>Another heading</h3>
              <div className="btn btn-blue">view more</div>
            </div>

          </div>
        </div>
        <div id="swiperPagination" className="swiper-pagination main-paging"></div>
      </div>
    );
  }
}

export default MainPageCarousel;