/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import {
  CircularLevel0,
  CircularLevel50,
  CircularLevel100,
} from '../../CircularLevel';

const returnFlag = flag => {
  if (flag === '1') {
    return <img className="flagImg" src="https://imgur.com/GmAnTas.png" />;
  }
  if (flag === '0') {
    return <img className="flagImg" src="https://imgur.com/cO7uPgA.png" />;
  }
  return <img className="flagImg" src="https://imgur.com/JrMn3j9.png" />;
};

const Impact = props => {
  const { arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5 className="tooltip">
              Results
              <span className="tooltiptext">Impact: Results reporting</span>
            </h5>
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Impact
              <span className="tooltiptext">Impact reporting</span>
            </h5>
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Measurement Framework
              <span className="tooltiptext">
                Mention of Theory/ Model / measurement
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className="content-div">
        <div className="cname-div">
          {arrayOfCharity.map(charity => {
            const { name } = charity;
            return (
              <div className="name-column">
                <h3>{name}</h3>
              </div>
            );
          })}
        </div>
        <div className="cLogo-div">
          {arrayOfCharity.map(charity => {
            const { img } = charity;
            return <img className="charity-logo" src={img[0].url} />;
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
                      <CircularLevel0 />
                      {
                        // {returnFlag(impactResults)}
                      }
                    </div>
                    <div className="column-cell">
                      <CircularLevel50 />
                      {
                        // {returnFlag(impactReporting)}
                      }
                    </div>
                    <div className="column-cell">
                      <CircularLevel100 />
                      {
                        // {returnFlag(mentionOfTheory)}
                      }
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

export default Impact;
