/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Filter from './Filter';

class LandingPage extends Component {
  state = {
    toggle: false,
    AdvanceSearch: false,
    defaultShow: true,
    keyword: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ keyword: value });
  };

  showAdvanceModel = () => {
    this.setState({ AdvanceSearch: true, defaultShow: false });
  };

  hideAdvanceModel = () => {
    this.setState({ AdvanceSearch: false, defaultShow: true });
  };

  move = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      const { keyword } = this.state;
      const { history } = this.props;
      history.push(`/search?keyword=${keyword}`);
    }
  };

  render() {
    const { toggle, defaultShow, keyword } = this.state;
    const { history } = this.props;
    const spanStyle = {
      color: '#fff',
    };
    return (
      <React.Fragment>
        <header>
          <nav>
            <div
              role="button"
              className={toggle ? 'icon change' : 'icon'}
              onClick={() => this.move()}
            >
              <div className="hamburger" />
              <div className="items" id="items">
                <a href="#Advanced">SEARCH</a>
                <a href="#Works">HOW IT WORKS</a>
                <a href="#Slider">CATEGORIES</a>
                <a href="#Contact">CONTACT US</a>
              </div>
            </div>
          </nav>
        </header>
        <section className="landing-page">
        <a name="Advanced" title="search" />
          <div className="rgba">
            {defaultShow && (
              <div className="to-hide">
                <div className="logo">
                  <div className="logoOne">
                    <p>
                      CHARI
                      <span style={spanStyle}>ZONE</span>
                    </p>
                  </div>
                  <div className="subLogo">
                    <p>Search, compare and donate</p>
                  </div>
                </div>
                <div className="search">
                  <input
                    placeholder="By Keyword, Name"
                    type="text"
                    value={keyword}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                  <Link
                    to={
                      keyword.trim() !== '' ? `/search?keyword=${keyword}` : '#'
                    }
                  >
                    <button type="button">
                      <i className="fa fa-search" />
                    </button>
                  </Link>
                  <h3 onClick={this.showAdvanceModel}>Advanced Search</h3>
                  <a name="advanced" title="advanced" />
                </div>
              </div>
            )}
            {this.state.AdvanceSearch && (
              <Filter Hide={this.hideAdvanceModel} history={history} />
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default LandingPage;
