import React, {Component} from 'react';
import {Link} from 'react-router';

import '../styles/product-page.sass';

export default class ProductsPage extends Component {
  componentDidMount() {
    let productItems = [...document.querySelectorAll('.product__item')];

    productItems.map(product => {
      let interval = setInterval(() => {

        let img = product.querySelector('img');

        if (img.width) {
          clearInterval(interval);

          if (img.width < 250) product.classList.add('product__little');
          if (img.width >= 250 && img.width <= 400) product.classList.add('product__middle');
          if (img.width > 320) product.classList.add('product__big');

        }

      }, 50);
    });

    let i = 0;
    let interval = setInterval(() => {
      let product = productItems[i];

      if (product) {
        product.classList.add('product__item--show');
      } else {
        clearInterval(interval);
      }

      i++;
    }, 150);
  }

  render() {
    return (
      <div className="ProductPage--products-list">
        <div className="product-inner">

          <div className="product-inner__header">
            <h3>PRODUCTS</h3>
            <div className="info">
              <h5>LIVING ROOM</h5>
              <i></i>
            </div>
          </div>

          <div className="product__list">
            {this.props.items.map((item, index) => (

              <Link key={index} to={`/product/${this.props.category}/${item.link}`}>

                <div className="product__item">
                  <img src={require(`../images/${item.img}`)} alt={item.name}/>
                  <div className="product__info">
                    <p className="product__name">{item.name}</p>
                    <p className="product__descr">{item.descr}</p>
                    <p className="product__price">${item.price}</p>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}