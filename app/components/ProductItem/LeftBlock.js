import React, {Component} from 'react';
import cx from 'classnames';

// import ItemImgSlider from './ItemImageSlider';


// import {centralizeByHeight} from '../../helpers';


export default class LeftBlock extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      canInc: true,
      canDec: true,
      imgStyles: {
        width: '50%'
      }
    };
  }

  toPercents(parent, elem, property) {
    return parseInt(getComputedStyle(elem)[property]) / parseInt(getComputedStyle(parent)[property]) * 100;
  }

  // componentDidMount() {
  //   let imageTimeout = setTimeout(() => {
  //     if (this.refs.productImg.clientHeight) {
  //
  //       centralizeByHeight(this.refs.parentBlock, this.refs.productImg, 'margin-top');
  //       clearInterval(imageTimeout);
  //     }
  //   }, 50);
  // }

  increaseSize() {
    let size = parseInt(this.state.imgStyles.width);
    if (size + 10 != 100) {
      this.setState({
        imgStyles: {width: `${size + 10}%`}
      });
    } else {
      this.setState({
        canInc: false,
        canDec: true
      });
    }
  }

  decreaseSize() {
    let size = parseInt(this.state.imgStyles.width);
    if (size - 10 != 10) {
      this.setState({
          imgStyles: {width: `${size - 10}%`}
        }
      );
    } else {
      this.setState({
        canInc: true,
        canDec: false
      });
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

        <img style={this.state.imgStyles} src={require(`../../images/${item.img}`)} alt={item.name}/>

        <div className="bottom-btns">
          <div className="img-size">
            <div onClick={() => {this.increaseSize();}} className={plusClassname}><span>+</span></div>
            <div onClick={() => {this.decreaseSize();}} className={minusClassname}><span>-</span></div>
          </div>
          <div className="location"></div>
        </div>
        {/*
         <ItemImgSlider item={item} />
         */}
      </div>
    );
  }
}