import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Search from '../components/Search';

const actions = {};


class SearchContainer extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="SearchContainer">
        <Search />
      </div>
    );
  }
}

SearchContainer.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);