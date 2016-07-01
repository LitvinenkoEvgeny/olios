import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ProductItem from '../components/ProductItem';

const actions = {};

class SingleProductPage extends Component {
  constructor() {
    super(...arguments);

    let items = this.props.products[this.props.params.category];
    items.map(item => {
      if (item.link === this.props.params.name) {
        this.item = item;
      }
    });

  }

  render() {
    return (
      <div>
        {
          this.item ? <ProductItem category={this.props.params.category}
                                   item={this.item} /> : "Error"
        }
      </div>
    );
  }
}

SingleProductPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);