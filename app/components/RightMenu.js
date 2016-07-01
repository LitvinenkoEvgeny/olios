import React, {Component} from 'react';
import {Link} from 'react-router';
import cx from 'classnames';

import '../styles/right-menu.sass';

class RightMenu extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    const hamburgerClass = cx({open: this.state.menuOpen});
    const rightMenuClass = cx({
      "right-menu right-menu--close": !this.state.menuOpen,
      "right-menu right-menu--open": this.state.menuOpen
    });
    return (
      <div className="RightMenu">

        <div className="menu__icon" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
          <div id="nav-icon1" className={hamburgerClass}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={rightMenuClass}>
          <div className="right-menu__items">

            <Link activeClassName="active-link" to="products/living-room">
              <div><i></i><span>LIVING ROOM</span></div>
            </Link>
            <Link activeClassName="active-link" to="/products">
              <div><i></i><span>OFFICE</span></div>
            </Link>
            <Link activeClassName="active-link" to="/products">
              <div><i></i><span>FOR KIDS</span></div>
            </Link>
            <Link activeClassName="active-link" to="/products">
              <div><i></i><span>KITCHEN</span></div>
            </Link>
            <Link activeClassName="active-link" to="/products">
              <div><i></i><span>ACCESORIES</span></div>
            </Link>

          </div>
        </div>

      </div>

    );
  }
}

export default RightMenu;