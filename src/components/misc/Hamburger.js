import React from 'react';
import setClassNames from "./setClassNames";

import "./scss/hamburger.scss";

const Hamburger = ({ handleClick, classNames }) => {
  const className = setClassNames( "hamburger", classNames );

  return (
    <div className={ className } onClick={ handleClick }>
      <p className="bar-first"/>
      <p className="bar-second"/>
      <p className="bar-third"/>
    </div>
  );
};

export default Hamburger;
