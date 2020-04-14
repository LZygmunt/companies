import React from 'react';
import Cell from "./Cell";
import Arrow from "./Arrow";

import "./scss/header-cell.scss";

const HeaderCell = ({ value, classNames }) => {
  let isSetClassNames = classNames !== null && classNames !== undefined;
  let className = isSetClassNames
    ? [ ...classNames ]
    : [];

  return (
    <div className="header-cell">
      <Cell value={ value } classNames={ className }/>
      <Arrow direction="down"/>
    </div>
  );
};

export default HeaderCell;
