import React, {Component} from 'react';

import '../styles/product-item.sass';

import LeftBlock from '../components/ProductItem/LeftBlock';
import RightBlock from '../components/ProductItem/RightBlock';

export default class ProductItem extends Component {
  constructor() {
    super(...arguments);
  }


  render() {
    const {item} = this.props;
    return (
      <div className="ProductItem">
        <LeftBlock item={item} />
        <RightBlock category={this.props.category} item={item} />
      </div>
    );
  }
}
