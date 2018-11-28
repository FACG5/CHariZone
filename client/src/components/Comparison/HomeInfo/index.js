/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

const HomeInfo = props => {
  const { arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5>name</h5>
          </div>
          <div className="table-cell">
            <h5>latest_fye</h5>
          </div>
          <div className="table-cell">
            <h5>income</h5>
          </div>
          <div className="table-cell">
            <h5>expend</h5>
          </div>
        </div>
      </div>
      <div className="content-div">
        {arrayOfCharity.map(charity => {
          const { name, latest_fye: latestFye, income, expend } = charity;
          return (
            <div className="charity-column">
              <div className="name-cell column-cell">{name}</div>
              <div className="column-cell">{latestFye}</div>
              <div className="column-cell">{income}</div>
              <div className="column-cell">{expend}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeInfo;
