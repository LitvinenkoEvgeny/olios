import React, {Component} from 'react';
import Swiper from 'swiper';

import '../../styles/product-image-swiper.scss';

export default class ItemImageSlider extends Component {
  componentDidMount() {
    this.swiper = new Swiper(this.refs.productImagesSlider, {
      loop: true
    });
  }

  render() {
    const {item} = this.props;

    return (
      <div ref="productImagesSlider" className="ProductItem__img-slider">
        <div className="swiper-wrapper">
          <img className="swiper-slide" src={require(`../../images/${item.img}`)}
               alt={item.name}/>
          {
            item.images.map((image, id) => (
              <img className="swiper-slide" key={id} src={require(`../../images/${image}`)} alt={item.name}/>
            ))
          }
        </div>
      </div>
    );
  }
}
