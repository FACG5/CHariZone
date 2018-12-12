/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HomeInfo = props => {
  const { arrayOfCharity, history } = props;
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
          </div>
          <div className="table-cell">
            <h5>Overall Governance:</h5>
          </div>
          <div className="table-cell">
            <h5>Overall Impact:</h5>
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
                    history.push('/charity/' + regno);
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
            const { img } = charity;
            return <img className="charity-logo" src={img[0].url} />;
          })}
        </div>
        <div className="columns-div">
          {arrayOfCharity.map(charity => {
            const { latest_fye: latestFye, income, expend,Financial,Governance,Impact

 } = charity;
            return (
              <div className="charity-column">
                {
                  // <div className="column-cell">{latestFye}</div>
                }
                <div className="column-cell">{income}</div>
                <div className="column-cell">{expend}</div>
                <div className="column-cell">
                  {Financial}<span>/6</span>
                </div>
                <div className="column-cell">
                  {Governance}<span>/8</span>
                </div>
                <div className="column-cell">
                  {Impact}<span>/3</span>
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
