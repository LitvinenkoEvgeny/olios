import React from 'react';
import {Link} from 'react-router';


import  '../styles/main page/left-menu.sass';

const LeftMenu = () => {
  return (
    <nav>
      <div className="left-menu">
        <Link to="/">
          <div className="left-menu__logo"><i></i></div>
        </Link>

        <div className="left-menu__item left-menu__item--home"><i></i></div>
        <div className="left-menu__item left-menu__item--basket"><i></i></div>
        <div className="left-menu__item left-menu__item--search"><i></i></div>
      </div>
    </nav>
  );
};

export default LeftMenu;
