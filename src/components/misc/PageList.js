import React from 'react';
import Arrow from "./Arrow";
import { DECREASE, INCREASE } from "../../store/utils/constants";

import "./scss/page-list.scss";

const PageList = ({ currentPage, countPage, setPage }) => {
  return (
    <div id="page-list">
      <Arrow direction="left" handleClick={() => setPage( DECREASE )}/>
      <span>{ currentPage } of { countPage }</span>
      <Arrow direction="right" handleClick={() => setPage( INCREASE )}/>
    </div>
  );
};

export default PageList;
