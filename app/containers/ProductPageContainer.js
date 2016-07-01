import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ProductPage from '../components/ProductsPage';


class ProductPageContainer extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const products = this.props.products[this.props.params.category];
    const {showProduct} = this.props.products;
    return (
      <ProductPage showProduct={showProduct} items={products} category={this.props.params.category} />
    );
  }
}

ProductPageContainer.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}


export default connect(mapStateToProps)(ProductPageContainer);