/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { CountContext } from '../../Context/CountContext';

import './style.css';

const CharityCount = () => (
  <CountContext.Consumer>
    {props => {
      const { charityList, removeCharity } = props;
      const count = charityList.length;
      const str = `/compare?${charityList
        .map((charity, i) => `charity${i + 1}=${charity.charityId}`)
        .join('&')}`;
      return (
        <div className="count-charity">
          <div className="charity--box">
            {charityList.map(charity => (
              <div className="charity--row">
                <span className="charity--name">{charity.name}</span>
                <span
                  onClick={() => removeCharity(charity.charityId)}
                  className="charity--remove"
                >
                  -
                </span>
              </div>
            ))}
          </div>
          <Link to={count > 1 && str}>
            <div className="tooltip">
              <img
                className="img-charity"
                src="http://www7.0zz0.com/2018/12/05/10/361893112.png"
                alt="img charity"
              />
              <div className="count">
                <strong>{count}</strong>
              </div>
              {/* {count > 1 ? (
                  <span>compare</span>
                ) : (
        
                  <span>
                    Add and compare at least <strong>two maximum three</strong>
                  </span>
                )} */}
            </div>
          </Link>
        </div>
      );
    }}
  </CountContext.Consumer>
);

export default CharityCount;
