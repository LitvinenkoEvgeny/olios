import React, {Component} from 'react';

import '../styles/product-item.sass';

import LeftBlock from '../components/ProductItem/LeftBlock';
import RightBlock from '../components/ProductItem/RightBlock';

export default class ProductItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showMore: false
    };
  }



  render() {
    const {item} = this.props;
    const {addLike} = this.props;
    return (
      <div className="ProductItem">
        <LeftBlock item={item} addLike={addLike} category={this.props.category}/>
        <RightBlock category={this.props.category}
                    recommended={this.props.recommended} item={item}/>
      </div>
    );
  }
}
