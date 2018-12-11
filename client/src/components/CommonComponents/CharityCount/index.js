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
      const { charityList, removeCharity, animation, animationEnd } = props;
      const count = charityList.length;
      const str = `/compare?${charityList
        .map((charity, i) => `charity${i + 1}=${charity.charityId}`)
        .join('&')}`;
      return (
        <div
          onAnimationEnd={() => animationEnd()}
          className={`count-charity ${animation ? 'fade' : ''}`}
        >
          <div className="tooltip">
            <Link to={count > 1 && str}>
              <img
                className="img-charity"
                src="/image/icon.png"
                alt="img charity"
              />
              <div className="count">
                <strong>{count}</strong>
              </div>
            </Link>
            <span className="tooltiptext place">
              <div className="charity--box">
                {charityList.length > 0 ? (
                  <React.Fragment>
                    {charityList.map(charity => (
                      <div className="charity--row">
                        <span className="charity--name"> - {charity.name}</span>
                        <span
                          onClick={() => removeCharity(charity.charityId)}
                          className="charity--remove fa fa-trash fa-lg"
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ) : (
                  <span>You didn't add any charities to compare yet</span>
                )}
              </div>
            </span>
          </div>
        </div>
      );
    }}
  </CountContext.Consumer>
);

export default CharityCount;
