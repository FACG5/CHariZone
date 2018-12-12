/* eslint-disable react/prop-types */
import React from 'react';

import './style.css';

const stringIsMore = string =>
  string.length > 300 ? `${string.slice(0, 300)} more..` : string;

const CategoryDetails = props => {
  const {
    details: { id, name, background, issue, scopeOfWork, activities },
  } = props;
  const styleDiv = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div key={id} className="category-div" style={styleDiv}>
      <div className="div-hidden-color">
        <h1 className="category-title">{name}</h1>
        <p className="category-text">{stringIsMore(issue)}</p>
      </div>
    </div>
  );
};

export default CategoryDetails;
