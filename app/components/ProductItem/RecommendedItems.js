import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import Swiper from 'swiper';


export default class RecommendedItems extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {items} = this.props;
    const {category} = this.props.category;
    return (
      <div>
        {items.map((item, index) => (
          <Link to={`/product/${this.props.category}/${item.link}/`}
                className="recommended-item" key={index}>
            <p>{item.name}</p>
            <img src={require(`../../images/${item.img}`)} alt={item.name}/>
            <p>{item.descr}</p>
          </Link>
        ))}
      </div>
    );
  }
}