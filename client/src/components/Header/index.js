/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import './index.css';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  state = {
    toggle: false,
  };

  move() {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className="header-container">
        <div className="div-logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="span-name">
              <h1>
                chari<span className="colored-name">zone</span>
              </h1>
            </span>
          </Link>
          <span className="description">
            <h2> all charities in one place</h2>
          </span>
        </div>
        <div>
          <nav>
            <div
              className={toggle ? 'icon change' : 'icon'}
              onClick={() => this.move()}
              onKeyDown={this.handleKeyDown}
            >
              <div className="hamburger" />
              <div className="items" id="items">
                <Link to="/">SEARCH</Link>
                <Link to="/#howitworks">HOW IT WORKS</Link>
                <Link to="/#slide">CATEGORIES</Link>
                <Link to="/#contactus">CONTACT US</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
