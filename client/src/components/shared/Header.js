import React, { Fragment } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper  blue-grey darken-3">
          <div className="row row-no_margin">
            <div className="col s12">
              <a href="#!" className="brand-logo">
                Logger
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/notes">Notes</Link>
                </li>
                <li>
                  <Link to="/board">Board</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#!">Board</a>
        </li>
        <li>
          <a href="#!">Notes</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default Header;
