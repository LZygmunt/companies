import React from 'react';
import Arrow from "./Arrow";
import { DECREASE, INCREASE } from "../../store/utils/constans";

import "./scss/page-list.scss"

const PageList = ({ currentPage, countPage, setPage }) => {
  return (
    <div id="page-list">
      <Arrow direction="left" handleClick={() => setPage( DECREASE )}/>
      <span>{ currentPage } z { countPage }</span>
      <Arrow direction="right" handleClick={() => setPage( INCREASE )}/>
    </div>
  );
};

export default PageList;
