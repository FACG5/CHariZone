/* eslint-disable react/prop-types */
import CircularProgressbar from 'react-circular-progressbar';
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const splitPercentage = x => x.split('%')[0];

const Financial = props => {
  const { arrayOfCharity } = props;
  return (
    <div className="compare-div">
      <div className="column-div">
        <div className="table-column">
          <div className="table-cell">
            <h5 className="tooltip">
              Expense and Managment
              <span className="tooltiptext">
                Effective charities must continuously develop their strategy,
                invest in their infrastructure and attract talent. However,
                these administrative expenses remain reasonable and in line with
                its charitable mission.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Fundraising Effeiciancy
              <span className="tooltiptext">
                Defintion : Charities must be efficient fundraisers, spending
                less to raise more. We calculate this ratio by determining how
                much it spends to generate £1 in voluntary income.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Capacity Ratio
              <span className="tooltiptext">
                Charities that spend more year over year on their programs and
                services have a greater impact on their charitable missions.
                This ratio indicates the charity's capacity to receive new
                donation and use it promptly.
              </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
            Donor dependency
  <span className="tooltiptext">
Defintion :We would like to know how dependent the charity is on your donation vs other forms of income. This clearly depends on the type of charity we are considering.
      </span>
            </h5>
            <img src="https://i.ibb.co/ZVPLVtB/information.png" />
          </div>
          <div className="table-cell">
            <h5 className="tooltip">
              Working Captial Ratio
              <span className="tooltiptext">
              Does thee charity have enough to survive a rainy day?
              </span>
            </h5>
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
            let {
              EMR,
              averageFundraising,
              Ecr,
              Currr,
              donerDependency,
            } = charity;
            EMR = splitPercentage(EMR);
            averageFundraising = splitPercentage(averageFundraising);
            Ecr = splitPercentage(Ecr);
            return (
              <div className="charity-column">
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={EMR}
                    backgroundPadding={20}
                    text={`${EMR}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(49, 90, 181, ${11.3})`,
                      },
                      text: {
                        fill: '#315AB5',
                        fontSize: '30px',
                        dominantBaseline: 'middle',
                        textAnchor: 'middle',
                        fontWeight: '700',
                      },
                      trail: { stroke: '#ccc' },
                    }}
                  />
                </div>
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={averageFundraising}
                    backgroundPadding={20}
                    text={`${averageFundraising}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(49, 90, 181, ${11.3})`,
                      },
                      text: {
                        fill: '#315AB5',
                        fontSize: '30px',
                        dominantBaseline: 'middle',
                        textAnchor: 'middle',
                        fontWeight: '700',
                      },
                      trail: { stroke: '#ccc' },
                    }}
                  />
                </div>
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                    percentage={Ecr}
                    backgroundPadding={20}
                    text={`${Ecr}%`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(49, 90, 181, ${11.3})`,
                      },
                      text: {
                        fill: '#315AB5',
                        fontSize: '30px',
                        dominantBaseline: 'middle',
                        textAnchor: 'middle',
                        fontWeight: '700',
                      },
                      trail: { stroke: '#ccc' },
                    }}
                  />
                </div>
                <div className="column-cell">
                  <CircularProgressbar
                    viewBox="0 0 164 180"
                         percentage={donerDependency.replace('%', '')}
                    backgroundPadding={20}
                    text={`${donerDependency}`}
                    styles={{
                      root: { width: '40px' },
                      path: {
                        stroke: `rgba(49, 90, 181, ${11.3})`,
                      },
                      text: {
                        fill: '#315AB5',
                        fontSize: '30px',
                        dominantBaseline: 'middle',
                        textAnchor: 'middle',
                        fontWeight: '700',
                      },
                      trail: { stroke: '#ccc' },
                    }}
                  />
                </div>
                <div className="column-cell">
                  <span>{`${Currr}`.substr(0, 5)}</span>
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

export default Financial;
