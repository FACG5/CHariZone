/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import BoxKpi from '../BoxKpi';
import './style.css';

import {
  CircularLevel0,
  CircularLevel50,
  CircularLevel100,
} from '../../circularGraph';

const returnFlag = flag => {
  if (flag === '1') {
    return <CircularLevel100 />; 
  }
  if (flag === '0') {
    return <CircularLevel50 />;
  }
  return <CircularLevel0 />;
};

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
            <span>Expense and Management Ratio</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={EMR.replace('%', '')}
                text={EMR} />
            </div>
            <div className="minMax">
                <div className="innerMaxMin">
                  <p>Flag over 20%</p>
                  </div>
                </div>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Effective charities must continuously develop their strategy, invest in their infrastructure and attract talent. However, these administrative expenses remain reasonable and in line with its charitable mission.</p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Fundraising Efficiency</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={averageFundraising.replace('%', '')}
                text={averageFundraising}
              />
                <div className="minMax">
                <div className="innerMaxMin">
                  <p>Flag over 20%</p>
                </div>
              </div>
               <div className="overlayInner">
            <p className="descrip-def innerDef">Charities must be efficient fundraisers, spending less to raise more. We calculate this ratio by determining how much it spends to generate £1 in voluntary income.</p>
            </div>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Capacity Ratio</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={Ecr.replace('%', '')}
                text={Ecr} />
            </div>
            <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>10.0%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>-10.0%</p>
                </div>
              </div>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Effective charities must continuously develop their strategy, invest in their infrastructure and attract talent. However, these administrative expenses remain reasonable and in line with its charitable mission.</p>
            </div>
          </div>
          <div className="kpi--item ">
         
           <span>Working Captial Ratio</span>
            {/* placeholder. Needs to be integrated into the database */}
           <span>{`${Currr}`.slice(0,5)}</span>
            <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>2</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>10</p>
                </div>
              </div>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Does this charity have enough to survive a rainy day?</p>
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
              </div>
              <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>78%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>95%</p>
                </div>
              </div>
               <div className="overlayInner">
               <p className="descrip-def innerDef">We would like to know how dependent the charity is on your donation vs other forms of income. This clearly depends on the type of charity we are considering. </p>
            </div>
            </div>
          <div className="kpi--item">
            <span>Balanced Budget</span>
            <div className="progressBar">
              <CircularProgressbar
                strokeWidth="13"
                percentage={donerDependency.replace('%', '')}
                text={donerDependency}
              />
              </div>
              <div className="minMax">
                <div className="innerMaxMin">
                  <p>Min</p>
                  <p>-20%</p>
                </div>
                <div className="innerMaxMin">
                <p>Max</p>
                <p>20%</p>
                </div>
              </div>
               <div className="overlayInner">
               <p className="descrip-def innerDef"> A balanced budget is a budget in which revenues are equal to expenditures. We  look at the 3year average to allow for cyclical changed.  </p>
            </div>GDPR
          </div>
        </div>
      </div>
    </BoxKpi>
    <BoxKpi name="Governance" description="The governing board has the ultimate oversight authority for any charitable organization. In this section, ChariZone searches the charity's annual report and websites looking for evidence of an effective board  and  their willingness to disclose basic information to the public. We assess these indicators against the This Charity Governance  Code.">
      <div className="kpi--row">
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Number Of Trustees</span>
            <span>{returnFlag(numberOfTrustees)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">According to the Charity Governance code, a board of trustees of at least 5 but no more than 12 is typically good practice. </p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Trustees Biography</span>
            <span>{returnFlag(trusteesBiography)}</span>
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
            <span>Compliance with GDPR</span>
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
            <span>Health & Safety Policy</span>
            <span>{returnFlag(policyHealth)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">All charities must have a health and safety policy. We are keen to see charities open about disclosign their policy emphasising the importance of looking after their employees and volunteers. </p>
            </div>
          </div>
          <div className="kpi--item">
            <span>Whistleblowing</span>
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
            <span>Impact</span>
            <span>{returnFlag(impactReporting)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">We would like to see  evidence of charity's activities and results  meeting its long term ambitions.</p>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Results</span>
            <span>{returnFlag(impactResults)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">We look for Results focused culture . evidence on the website and annual of clear and comprehensive evidence of positive results . And openness in sharing results with the public</p>
            </div>
          </div>
        </div>
        <div className="kpi--column">
          <div className="kpi--item">
            <span>Measurement Framework</span>
            <span>{returnFlag(mentionOfTheory)}</span>
            <div className="overlayInner">
            <p className="descrip-def innerDef">Is the charity giving us a better understanding of how they link the results with impact. </p>
            </div>
          </div>
        </div>
      </div>
    </BoxKpi>
  </div>);
}

export default Kpis;
