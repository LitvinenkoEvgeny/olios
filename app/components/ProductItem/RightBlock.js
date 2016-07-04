import React, {Component} from 'react';

import RecommendedItems from './RecommendedItems';

export default class RightBlock extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      quantity: 1
    };

    this.getCategoryName = this.getCategoryName.bind(this);
  }

  getCategoryName() {
    return this.props.category.split('-').join(' ');
  }


  render() {
    const {item} = this.props;
    let {recommended} = this.props;
    if (recommended.length) {
      recommended =
        <div className="recommended">
          <RecommendedItems category={this.props.category} items={this.props.recommended}/>
        </div>;
    } else {
      recommended =
        <div className="recommended empty">
          <h1>Nothing similar</h1>
        </div>;

    }

    return (
      <div className="ProductItem__right-block">

        <div className="head">
          <h4>Products</h4>
          <div className="category_wrp">

            <div className="category">
              <span>{this.getCategoryName()}</span>
              <i className={this.props.category}/>
            </div>

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
                {item.oldPrice && <span className="oldPrice">${item.oldPrice}</span>}
              </p>
            </div>

            <div className="quantity">
              <p>quantity</p>
              <input type="number"
                     value={this.state.quantity}
                     onChange={(e) => {this.setState({quantity: e.target.value});}}
              />
            </div>

            <div className="buy-btn">
              <input type="button" value="add to card"/>
            </div>
          </div>
          {recommended}
        </div>

      </div>
    );
  }
}