/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export const CountContext = React.createContext();

class CountProvider extends Component {
  state = {
    charityList: [],
    animation: false,
  };

  animationEnd = () => {
    this.setState(prv => ({
      animation: !prv.animation,
    }));
  };

  changeActive = (charityId, name) => {
    const { charityList } = this.state;
    let obj = {};
    const charitylistResult = charityList.filter(
      charity => charity.charityId !== charityId
    );
    if (charitylistResult.length === charityList.length) {
      charitylistResult.push({ charityId, name });
      obj = { animation: true };
    }
    const count = charitylistResult.length;
    if (count <= 3) {
      this.setState({
        ...obj,
        charityList: charitylistResult,
      });
    }
  };

  removeCharity = charityId => {
    let { charityList } = this.state;
    charityList = charityList.filter(
      charity => charity.charityId !== charityId
    );
    this.setState({
      charityList,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <CountContext.Provider
        value={{
          ...this.state,
          changeActive: this.changeActive,
          removeCharity: this.removeCharity,
          animationEnd: this.animationEnd,
        }}
      >
        {children}
      </CountContext.Provider>
    );
  }
}

export default CountProvider;
