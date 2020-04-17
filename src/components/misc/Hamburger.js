import React from 'react';

import "./scss/hamburger.scss";

const Hamburger = ({ handleClick, className }) => {
  return (
    <div className={ `hamburger ${ className }`} onClick={ handleClick }>
      <p className="bar-first"></p>
      <p className="bar-second"></p>
      <p className="bar-third"></p>
    </div>
  );
};

export default Hamburger;
