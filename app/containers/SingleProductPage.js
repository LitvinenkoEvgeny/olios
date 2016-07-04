import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/itemPageActions';

import ProductItem from '../components/ProductItem';


class SingleProductPage extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    this.getProduct(this.props.params.category, this.props.params.name);
    let items = this.props.products[this.props.params.category];
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.getProduct(nextProps.params.category, nextProps.params.name);
    }
  }

  getProduct(category, name) {
    this.props.actions.getProduct(category, name);
  }


  findRecommended(items, item) {
    let name = item.name.split(' ')[1];

    let recommended = items.filter((e, i, a) => {
      if (item === e) return false;
      return e.name.indexOf(name) >= 0;
    });
    return recommended;
  }


  render() {
    const item = this.props.nowShowing;
    return (
      <div>
        {
          item ? <ProductItem category={this.props.params.category}
                              addLike={this.props.actions.addLike}
                              recommended={this.findRecommended(this.props.products[this.props.params.category], item)}
                              item={this.props.nowShowing}/> : "Error"
        }
      </div>
    );
  }
}

SingleProductPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
    nowShowing: state.products.nowShowing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);