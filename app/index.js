import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';


import App from './containers/AppContainer';
import MainPage from './components/MainPage';
import ProductPage from './containers/ProductPageContainer';
import SingleProductPage from './containers/SingleProductPage';

import configureStore from './store/';
import './styles/index.scss';

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="products/:category" component={ProductPage} />
        <Route path="product/:category/:name" component={SingleProductPage} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

