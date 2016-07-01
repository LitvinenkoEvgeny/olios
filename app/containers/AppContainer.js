import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';


const actions = {};

class AppContainer extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="container">
        <LeftMenu />
        {this.props.children}
        <RightMenu />
      </div>
    );
  }
}

AppContainer.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);