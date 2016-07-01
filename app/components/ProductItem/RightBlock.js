import React, {Component} from 'react';

export default class RightBlock extends Component {
  constructor() {
    super(...arguments);
    this.getCategoryName = this.getCategoryName.bind(this);
  }

  getCategoryName() {
    return this.props.category.split('-').join(' ');
  }

  render() {
    const {item} = this.props;
   
    return (
      <div className="ProductItem__right-block">

        <div className="head">
          <h4>Products</h4>
          <div className="category">
            <span>{this.getCategoryName()}</span>
            <i></i>
          </div>
        </div>

        <div className="body">
          <p className="full-name">
            <span className="first-part">{item.name}</span>
            {' '}
            -
            {' '}
            <span>{this.getCategoryName()}</span>
          </p>
          <p className="descr">
            {item.fullDescr}
          </p>
          <div className="actions">
            <div className="price">
              <p>cost</p>
              <p>
                <span className="actual">${item.price}</span>
                {item.oldPrice && <span className="before">${item.oldPrice}</span>}
              </p>
            </div>

            <div className="quantity">
              <p>quantity</p>
              <input type="number"/>
            </div>

            <div className="buy-btn">
              <input type="button" value="add to card"/>
            </div>
          </div>
        </div>

        <div className="recommended">
          <div className="recommended__item">
            <img src="" alt=""/>
            <p>dark seat</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>

      </div>
    );
  }
}