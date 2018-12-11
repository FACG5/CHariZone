/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
import { CountContext } from '../../Context/CountContext';

const ClassNameCompareBtn = (charityNumber, arraySelect) => {
  let ChangeCompareColor = 'button-compare-donate';
  const arr = arraySelect.map(charity => charity.charityId);
  if (arr.includes(`${charityNumber}`)) {
    ChangeCompareColor += ' active';
  }
  return ChangeCompareColor;
};

const isActive = (charityNumber, arraySelect) => {
  const arr = arraySelect.map(charity => charity.charityId);
  if (arr.includes(`${charityNumber}`)) {
    return true;
  }
  return false;
}

const GetImgUrl = img => {
  let url = '';
  if (img === undefined) {
    url =
      'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png';
  } else {
    [{ url }] = img;
  }
  return url;
};

const Donate = history => {
  history.push('/under-construction');
};

const CharityHeader = props => {
  const { changeTab, name, tabs, charityNumber, img, history } = props;
  return (
    <div>
      <img alt="" id="charity--img" src={GetImgUrl(img)} />
      <span id="charity--name">{name}</span>
      <CountContext.Consumer>
        {consumer => {
          const { changeActive, charityList } = consumer;
          return (
            <div className="div-tow-button-cd">
              <button
                className={ClassNameCompareBtn(charityNumber, charityList)}
                onClick={() => changeActive(charityNumber, name)}
                type="button"
              >
                {isActive(charityNumber, charityList) ? (
                  <span>-</span>
                ) : (
                  <span>+</span>
                )}{' '}
                Compare
              </button>
              <button
                className="button-compare-donate"
                onClick={() => Donate(history)}
                type="button"
              >
                Donate
              </button>
            </div>
          );
        }}
      </CountContext.Consumer>
      <div className="tabs">
        <ul>
          {['MAIN DETAILS', 'CONTACT', 'CHARITY INSIGHT'].map((x, i) => (
            <li
              onClick={() => changeTab(i + 1)}
              className={tabs === i + 1 ? 'tabActive' : ''}
            >
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(CharityHeader);
