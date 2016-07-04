import React, {Component} from 'react';
import cx from 'classnames';


import {centralizeByHeight} from '../../helpers';

export default class LeftBlock extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      canInc: true,
      canDec: true
    };
    this.increaseImage = this.increaseImage.bind(this);
    this.decreaseImage = this.decreaseImage.bind(this);
  }

  toPercents(parent, elem, property) {
    return parseInt(getComputedStyle(elem)[property]) / parseInt(getComputedStyle(parent)[property]) * 100;
  }

  componentDidMount() {
    let imageTimeout = setTimeout(() => {
      if (this.refs.productImg.clientHeight) {

        centralizeByHeight(this.refs.parentBlock, this.refs.productImg, 'margin-top');
        clearInterval(imageTimeout);
      }
    }, 50);
  }

  increaseImage() {
    let leftParentBlock = document.querySelector('.ProductItem__left-block');
    let productImg = document.querySelector('.ProductItem__left-block > img');

    let oldProductImgHeight = parseInt(getComputedStyle(productImg).height);
    let nowWidth = this.toPercents(leftParentBlock, productImg, 'width');

    let itemClientHeight = productImg.offsetHeight;

    if (nowWidth + 10 <= 100 && productImg.clientHeight <= 485) {
      let nextMinWidth = nowWidth + 10;
      productImg.style.width = `${nextMinWidth}%`;
      let newProductImgHeight = parseInt(getComputedStyle(productImg).height);
      productImg.style.marginTop = parseInt(getComputedStyle(productImg).marginTop) - ((newProductImgHeight - oldProductImgHeight) / 2) + "px";
      this.setState({canDec: true});
    } else {
      this.setState({canInc: false, canDec: true});
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
      this.setState({canInc: true});
    } else {
      this.setState({canInc: true, canDec: false});
    }
  }

  render() {
    const {item} = this.props;
    const {category} = this.props;
    let plusClassname = cx({
      'plus': true,
      'active': this.state.canInc,
      'inactive': !this.state.canInc
    });
    let minusClassname = cx({
      'minus': true,
      'active': this.state.canDec,
      'inactive': !this.state.canDec
    });

    return (
      <div ref="parentBlock" className="ProductItem__left-block">
        <div className="lks">
          <p className="likes">{item.likes}</p>
          <i className="likes-icon" onClick={() => {this.props.addLike(category, item.name);}}></i>
        </div>
        <img ref="productImg" src={require(`../../images/${item.img}`)} alt={item.name}/>

        <div className="bottom-btns">
          <div className="img-size">
            <div className={plusClassname} onClick={this.increaseImage}><span>+</span></div>
            <div className={minusClassname} onClick={this.decreaseImage}><span>-</span></div>
          </div>
          <div className="location"></div>
        </div>
      </div>
    );
  }
}