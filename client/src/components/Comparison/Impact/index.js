/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './index.css';
import {
  CircularLevel0,
  CircularLevel50,
  CircularLevel100,
} from '../../CircularLevel';

const returnFlag = flag => {
  if (flag === '1') {
    return <CircularLevel100 />;
  }
  if (flag === '0') {
    return <CircularLevel50 />;
  }
  return <CircularLevel0 />;
};

const Impact = props => {
  const { history, arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5 className="tooltip">
              Results
              <span className="tooltiptext">
                We look for Results focused culture . evidence on the website
                and annual of clear and comprehensive evidence of positive
                results . And openness in sharing results with the public
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Impact
              <span className="tooltiptext">
                We would like to see evidence of charity's activities and
                results meeting its long term ambitions.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Measurement Framework
              <span className="tooltiptext">
                Is the charity giving us a better understanding of how they link
                the results with impact.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
        </div>
      </div>
      <div className="content-div">
        <div className="cname-div">
          {arrayOfCharity.map(charity => {
            const { name, regno } = charity;
            return (
              <div className="name-column">
                <h3
                  onClick={() => {
                    history.push(`/charity/${regno}`);
                  }}
                >
                  {name}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="cLogo-div">
          {arrayOfCharity.map(charity => {
            const { img, regno } = charity;
            return (
              <img
                className="charity-logo"
                src={img[0].url}
                alt="img"
                onClick={() => {
                  history.push(`/charity/${regno}`);
                }}
              />
            );
          })}
        </div>
        <div className="columns-div">
          {arrayOfCharity !== undefined
            ? arrayOfCharity.map(charity => {
                const {
                  impactResults,
                  impactReporting,
                  mentionOfTheory,
                } = charity;
                return (
                  <div className="charity-column">
                    <div className="column-cell">
                      {returnFlag(impactResults)}
                    </div>
                    <div className="column-cell">
                      {returnFlag(impactReporting)}
                    </div>
                    <div className="column-cell">
                      {returnFlag(mentionOfTheory)}
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
        <div className="donate-buttons">
          {arrayOfCharity.map(() => (
            <Link to="/under-construction" className="donate-b">
              donate
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Impact);
