import React from 'react';
import Cell from "./Cell";
import Arrow from "./Arrow";

import "./scss/header-cell.scss";

const HeaderCell = ({
  value,
  classNames,
  sort
}) => {
  return (
    <div className="header-cell">
      <Cell value={ value } classNames={ classNames }/>
      <Arrow direction="down" handleClick={ sort }/>
    </div>
  );
};

export default HeaderCell;
