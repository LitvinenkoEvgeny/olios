import React from 'react';

import '../styles/search.sass';


const Search = (props) => (
  <div className="search">
    <div className="search__input">
      <input className="search__input-field" id="searchInput" type="text"/><i />
      <label htmlFor="searchInput">Type product that you are looking for</label>
      <div className="search__result">
        <div className="search__item">
          <img src={require("../images/red-seat.jpg")} alt="search result"/>
          <h1>Red seat</h1>
        </div>
        <div className="search__item">
          <img src={require("../images/blue-seat.jpg")} alt="search result"/>
          <h1>Red seat</h1>
        </div>
        <div className="search__item">
          <img src={require("../images/modern-bed.jpg")} alt="search result"/>
          <h1>Red seat</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Search;