import React from 'react';
import Arrow from "./Arrow";

import "./scss/page-list.scss"

const PageList = ({ currentPage, countPage }) => {
  return (
    <div id="page-list">
      <Arrow direction="left"/>
      <span>{ currentPage } z { countPage }</span>
      <Arrow direction="right"/>
    </div>
  );
};

export default PageList;
