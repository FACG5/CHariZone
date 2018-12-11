/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ResultCard = props => {
  const {
    idChirty,
    key0,
    name,
    text,
    isActive,
    logo,
    onClickCompare,
    onClickDonate,
    financial,
    governance,
    impact,
    extraClass,
  } = props;
  return (
    <div
      className={
        extraClass ? `div--card-result ${extraClass}` : 'div--card-result'
      }
      key={key0}
    >
      <Link to={`/charity/${idChirty}`} className="div--logo">
        <img src={logo} alt="logo default" />
        <div className="div--hidden">
          <ul>
            <li>
              Financial: <span>{financial}</span>
            </li>
            <li>
              Governance: <span>{governance}</span>
            </li>
            <li>
              Impact: <span>{impact}</span>
            </li>
          </ul>
        </div>
      </Link>
      <Link to={`/charity/${idChirty}`} className="div--name-des">
        <h2>{name}</h2>
        <p>" {text} "</p>
      </Link>
      <div className="div--two-button">
        <button
          type="button"
          className="button-compare-donate"
          onClick={() => onClickDonate()}
        >
          Donate
        </button>
        <button
          type="button"
          className={
            isActive ? 'button-compare-donate active' : 'button-compare-donate'
          }
          onClick={() => onClickCompare()}
        >
          {isActive ? <span>-</span> : <span>+</span>} Compare
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
