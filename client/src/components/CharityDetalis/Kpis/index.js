/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import BoxKpi from '../BoxKpi';
import './style.css';

const returnFlag = flag => {
  if (flag === '1') {
    return <img className="flagImg" src="https://imgur.com/GmAnTas.png" />
  } if (flag === '0') {
    return <img className="flagImg" src="https://imgur.com/cO7uPgA.png" />
  } if (flag === '-1') {
    return <img className="flagImg" src="https://imgur.com/JrMn3j9.png" />
  }
  return <span>-</span>
}

const Kpis = (props) => {

  const {
    EMR,
    averageFundraising,
    Ecr,
    Currr,
    donerDependency,
    numberOfTrustees,
    executiveCompensation,
    policyHealth,
    trusteesBiography,
    policyGeneral,
    safeGuarding,
    tob,
    policyWhistleblowing,
    fundraisingPromise,
    impactReporting,
    impactResults,
    mentionOfTheory,
  } = props;
  return (<div className="kpi--tables">
    <BoxKpi name="Financial" description="ChariZone is here to unpack the financial health of a charity for you. Finances refers to the money the organisation has, and how it uses this money. Using  data available from the Charity Commission (open source) , here are our key ratios to assess the charities financial management, efficiency and security. ">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>3YR Average Expense & Managemant Ratio</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={EMR.replace('%', '')}
                text={EMR} />
            </div>
            <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>10%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>25%</p>
                </div>
              </div>
            <div className="overlayInner">
            <p className="descrip-def innerDef">ChariZone would like to see this ratio below 25%</p>
            </div>
          </div>
          <div className="kpi--item">
            <span>3Y Average Fundraising Effecincy</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={averageFundraising.replace('%', '')}
                text={averageFundraising}
              />
                <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>10%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>25%</p>
                </div>
              </div>
               <div className="overlayInner">
            <p className="descrip-def innerDef">ChariZone would like to see this ratio below 25%</p>
            </div>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Efficiency And Capacity Ratio</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={Ecr.replace('%', '')}
                text={Ecr} />
            </div>
            <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>10%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>25%</p>
                </div>
              </div>
            <div className="overlayInner">
            <p className="descrip-def innerDef">ChariZone would like to see this ratio below 25%</p>
            </div>
          </div>
          <div className="kpi--item ">
          <div className="lastItem">
            <span>Current Ratio</span>
            <span>{`${Currr}`.substr(0, 5)}</span>
            </div>
            <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>10%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>25%</p>
                </div>
              </div>
            <div className="overlayInner">
            <p className="descrip-def innerDef">plaaaace holder</p>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Doner Dependency</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={donerDependency.replace('%', '')}
                text={donerDependency}
              />
              <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>10%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>25%</p>
                </div>
              </div>
               <div className="overlayInner">
               <p className="descrip-def innerDef">How dependent the charity is on your donation vs other forms on income. </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </BoxKpi>
    <BoxKpi name="Governance" description="The governing board has the ultimate oversight authority for any charitable organization. In this section, ChariZone searches the charity's annual report and websites looking for evidence of an effective board  and  their willingness to disclose basic information to the public. We assess these indicators against the This Charity Governance  Code.">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Number Of Trustees</span>
            <span>{numberOfTrustees}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">According to the Charity Governance code, a board of trustees of at least 5 but no more than 12 is typically good practice. </p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Executive Compensation</span>
            <span>{executiveCompensation}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">According to the Charity Governance code, a board of trustees of at least 5 but no more than 12 is typically good practice. </p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Policy: Health & Safety</span>
            <span>{returnFlag(policyHealth)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">According to the Charity Governance code, a board of trustees of at least 5 but no more than 12 is typically good practice. </p>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Trustees Biography  </span>
            <span>{trusteesBiography}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">According to the Charity Governance code, a board of trustees of at least 5 but no more than 12 is typically good practice. </p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Policy:General Data Protection Regulations</span>
            <span>{returnFlag(policyGeneral)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">General Data Protection Regulation cites tougher rules around the handling of personal information.  We would like to see enforceability and disclosure of this legislation on both the website and the annual report of the charity. </p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Safe Guarding</span>
            <span>{returnFlag(safeGuarding)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Should be a key governance priority for all charities, regardless of size, type or income, not just those working with groups traditionally considered at risk. Charities must put safeguards in place to protect those who come into contact with your charity. </p>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Term on Board</span>
            <span>{returnFlag(tob)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">With this , we look if the charity has a policy for how long the trustees serve on board.  This ensures a regular process of assessing the skills, ability and experience of board members</p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Policy: Whistleblowing</span>
            <span>{returnFlag(policyWhistleblowing)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef"> A charity should be a safe and trusted environment. Any person is able to complain about a charity to the Police, Fundraising Regulator and the Charity Commission.</p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Fundraising Promise</span>
            <span>{returnFlag(fundraisingPromise)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Outlines our commitment to donors and the general public Those who register with the Fundraising Regulator agree to ensure their fundraising is legal, open, honest and respectful. The standards for fundraising are set out in the Code of Fundraising Practice.</p>
            </div>
          </div>
        </div>
      </div>
    </BoxKpi>
    <BoxKpi name="Impact" description="The governing board has the ultimate oversight authority for any charitable organization. In this section, ChariZone searches the charity's annual report and websites looking for evidence of an effective board  and  their willingness to disclose basic information to the public. We assess these indicators against the This Charity Governance  Code.">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Impact Reporting</span>
            <span>{returnFlag(impactReporting)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Evidence of charity's activities and results  meeting its long term ambitions.</p>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Impact: Results Reporting </span>
            <span>{returnFlag(impactResults)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Evidence of charity's activities and results  meeting its long term ambitions.</p>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Mention Of Theory</span>
            <span>{returnFlag(mentionOfTheory)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Evidence of charity's activities and results  meeting its long term ambitions.</p>
            </div>
          </div>
        </div>
      </div>
    </BoxKpi>
  </div>);
}

export default Kpis;
