import React, {Component} from 'react';

export default class LeftBlock extends Component {
  constructor() {
    super(...arguments);
    this.canResize = this.canResize.bind(this);
  }

  canResize() {
    let leftParentBlock = document.querySelector('.ProductItem__left-block');
    let productImg = document.querySelector('.ProductItem__left-block > img');
    console.dir(productImg);
    console.dir(leftParentBlock);
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
          <div className="img-size">
            <div className="plus" onClick={this.canResize}><span>+</span></div>
            <div className="minus"><span>-</span></div>
          </div>
          <div className="location"></div>
        </div>
      </div>
    );
  }
}