import React from 'react';
import Cell from "./Cell";
import Arrow from "./Arrow";

import "./scss/header-cell.scss";

const HeaderCell = ({
  value,
  classNames,
  sort
}) => {
  let isSetClassNames = classNames !== null && classNames !== undefined;
  let className = isSetClassNames
    ? [ ...classNames ]
    : [];

  return (
    <div className="header-cell">
      <Cell value={ value } classNames={ className }/>
      <Arrow direction="down" handleClick={ sort }/>
    </div>
  );
};

export default HeaderCell;
