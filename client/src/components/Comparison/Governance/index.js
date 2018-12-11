/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';
import { withRouter, Link } from 'react-router-dom';
import { LevelBar0, LevelBar1, LevelBar2, LevelBar3 } from '../../LevelBar';
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

const Governance = props => {
  const { history, arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5 className="tooltip">
              Number of Trustees
              <span className="tooltiptext">
                According to the Charity Governance code, a board of trustees of
                at least 5 but no more than 12 is typically good practice.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5>Trustees Biography</h5>
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Term on Board
              <span className="tooltiptext">
                With this , we look if the charity has a policy for how long the
                trustees serve on board. This ensures a regular process of
                assessing the skills, ability and experience of board members
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5>ECR</h5>
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Compliance with GDPR
              <span className="tooltiptext">
                General Data Protection Regulation cites tougher rules around
                the handling of personal information. We would like to see
                enforceability and disclosure of this legislation on both the
                website and the annual report of the charity.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Whistleblowing
              <span className="tooltiptext">
                A charity should be a safe and trusted environment. Any person
                is able to complain about a charity to the Police, Fundraising
                Regulator and the Charity Commission.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Health & Safety
              <span className="tooltiptext">
                GAll charities must have a health and safety policy. We are keen
                to see charities open about disclosign their policy emphasising
                the importance of looking after their employees and volunteers.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Saveguarding policy
              <span className="tooltiptext">
                Safeguarding should be a key governance priority for all
                charities, regardless of size, type or income, not just those
                working with groups traditionally considered at risk. Charities
                must put safeguards in place to protect those who come into
                contact with your charity. We would like to see emphasis and
                disclosure of this key policy on the website and the annual
                report of the charity.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" alt="img" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Fundraising Promise
              <span className="tooltiptext">
                Outlines our commitment to donors and the general public Those
                who register with the Fundraising Regulator agree to ensure
                their fundraising is legal, open, honest and respectful. The
                standards for fundraising are set out in the Code of Fundraising
                Practice.
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
                    history.push(`/charity/${  regno}`);
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
            return <img className="charity-logo" src={img[0].url} alt="img" />;
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
export default withRouter(Governance);
