import React, {Component} from 'react';

import '../styles/main page/main page view.sass';

export default class MainPageView extends Component{
  render(){
    return (
      <div className="main-page">
        <div className="main-page__slider">
          <div className="header">
            <div className="slider-shadow">newest</div>
            <h1>Olios</h1>
            <h3>newest furniture shop template</h3>
            <div className="btn btn-blue">view more</div>
          </div>
        </div>
      </div>
    );
  }
}