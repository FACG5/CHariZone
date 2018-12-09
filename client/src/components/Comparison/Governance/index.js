/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { LevelBar0, LevelBar1, LevelBar2, LevelBar3 } from '../../LevelBar';

const returnFlag = flag => {
  if (flag === '1') {
    return <LevelBar0 />;
  }
  if (flag === '0') {
    return <LevelBar1 />;
  }
  return <LevelBar3 />;
};

const Governance = props => {
  const { arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5 className="tooltip">
              Number of Trustees
              <span className="tooltiptext">
                NUMBER OF TRUSTEES recommend under 15 trustees and over 2
                trustees
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5>Trustees Biography</h5>
          </div>
          <div className="table-cell">
            <h5>Term on Board</h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5>ECR</h5>
          </div>
          <div className="table-cell">
            <h5>Compliance with GDPR</h5>
          </div>
          <div className="table-cell">
            <h5>Whistleblowing</h5>
          </div>
          <div className="table-cell">
            <h5>Health & Safety</h5>
          </div>
          <div className="table-cell">
            <h5>Saveguarding policy</h5>
          </div>
          <div className="table-cell">
            <h5>Fundraising Promise</h5>
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
          {arrayOfCharity.map(charity => {
            const {
              numberOfTrustees,
              trusteesBiography,
              tob,
              executiveCompensation,
              policyGeneral,
              policyWhistleblowing,
              policyHealth,
              safeGuarding,
              fundraisingPromise,
            } = charity;
            return (
              <div className="charity-column">
                <div className="column-cell">
                  {returnFlag(numberOfTrustees)}
                </div>
                <div className="column-cell">
                  {returnFlag(trusteesBiography)}
                </div>
                <div className="column-cell">{returnFlag(tob)}</div>
                <div className="column-cell">{executiveCompensation}</div>
                <div className="column-cell">{returnFlag(policyGeneral)}</div>
                <div className="column-cell">
                  {returnFlag(policyWhistleblowing)}
                </div>
                <div className="column-cell">{returnFlag(policyHealth)}</div>
                <div className="column-cell">{returnFlag(safeGuarding)}</div>
                <div className="column-cell">
                  {returnFlag(fundraisingPromise)}
                </div>
              </div>
            );
          })}
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
export default Governance;
