/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HomeInfo = props => {
  const { arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5>Incoming p.a.:</h5>
          </div>
          <div className="table-cell">
            <h5>Expenditure p.a.:</h5>
          </div>
          <div className="table-cell">
            <h5>Overall Financial:</h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5>Overall Governance:</h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5>Overall Impact:</h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
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
            const { latest_fye: latestFye, income, expend } = charity;
            console.log(charity);
            return (
              <div className="charity-column">
                {
                  // <div className="column-cell">{latestFye}</div>
                }
                <div className="column-cell">{income}</div>
                <div className="column-cell">{expend}</div>
                <div className="column-cell">
                  2<span>/6</span>
                </div>
                <div className="column-cell">
                  3<span>/8</span>
                </div>
                <div className="column-cell">
                  1<span>/3</span>
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

export default HomeInfo;
