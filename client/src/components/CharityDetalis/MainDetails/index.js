/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const MainDetails = props => {
  let { objective, who, what, how, website } = props;
  if (!new RegExp(/(^http:\/\/)|(^https:\/\/)/).test(website)) {
    website = `http://${website}`;
  }

  return (
    <div className="mainDetails">
      <table>
        <tbody>
          <tr>
            <td>
              <span className="header">Objective</span>
            </td>
            <td className="header--items">
              <span>{objective}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="header">Website</span>
            </td>
            <td className="header--items">
              <span>
                <a href={website}>{website}</a>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="header">Who</span>
            </td>
            <td className="header--items">
              {who.map((x, i) => (
                <span key={x + i}>{x}</span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <span className="header">What</span>
            </td>
            <td className="header--items">
              {how.map((x, i) => (
                <span key={x + i}>{x}</span>
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <span className="header">How</span>
            </td>
            <td className="header--items">
              {what.map((x, i) => (
                <span key={x + i}>{x}</span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainDetails;
