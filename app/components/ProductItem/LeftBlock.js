import React, {Component} from 'react';
import {centralizeByHeight} from '../../helpers';

export default class LeftBlock extends Component {
  constructor() {
    super(...arguments);
    this.increaseImage = this.increaseImage.bind(this);
    this.decreaseImage = this.decreaseImage.bind(this);
  }
  
  toPercents(parent, elem, property){
    return parseInt(getComputedStyle(elem)[property]) / parseInt(getComputedStyle(parent)[property]) * 100;
  }
  
  

  increaseImage() {
    let leftParentBlock = document.querySelector('.ProductItem__left-block');
    let productImg = document.querySelector('.ProductItem__left-block > img');
    
    let oldProductImgHeight = parseInt(getComputedStyle(productImg).height);
    let nowWidth = this.toPercents(leftParentBlock, productImg, 'width');
    
    let itemClientHeight = productImg.offsetHeight;
    console.log(parseInt(getComputedStyle(leftParentBlock).paddingTop) + parseInt(getComputedStyle(productImg).marginTop) + itemClientHeight);
    
    if (nowWidth + 10 <= 100) {
      let nextMinWidth = nowWidth + 10;
      productImg.style.width = `${nextMinWidth}%`;
      let newProductImgHeight = parseInt(getComputedStyle(productImg).height);
      productImg.style.marginTop = parseInt(getComputedStyle(productImg).marginTop) - ((newProductImgHeight - oldProductImgHeight) / 2) + "px";
    }
  }

  decreaseImage() {
    let leftParentBlock = document.querySelector('.ProductItem__left-block');
    let productImg = document.querySelector('.ProductItem__left-block > img');
    let oldProductImgHeight = parseInt(getComputedStyle(productImg).height);
    let nowMinWidth = this.toPercents(leftParentBlock, productImg, 'width');

    if (nowMinWidth - 10 >= 30) {
      let nextMinWidth = nowMinWidth - 10;
      productImg.style.width = `${nextMinWidth}%`;
      let newProductImgHeight = parseInt(getComputedStyle(productImg).height);
      productImg.style.marginTop = parseInt(getComputedStyle(productImg).marginTop) + ((oldProductImgHeight - newProductImgHeight) / 2) + "px";
    }
  }

  render() {
    const {item} = this.props;

    return (
      <div className="ProductItem__left-block">
        <div className="lks">
          <p className="likes">{item.likes}</p>
          <i className="likes-icon"></i>
        </div>
        <img src={require(`../../images/${item.img}`)} alt={item.name}/>

        <div className="bottom-btns">
          {/*
            <div className="img-size">
              <div className="plus" onClick={this.increaseImage}><span>+</span></div>
              <div className="minus" onClick={this.decreaseImage}><span>-</span></div>
            </div>
          */}
          <div className="location"></div>
        </div>
      </div>
    );
  }
}