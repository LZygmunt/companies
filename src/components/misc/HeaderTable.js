import React from 'react';
import HeaderCell from "./HeaderCell";

import "./scss/header-table.scss";

const HeaderTable = () => {
  return (
    <div id="header-table">
      <HeaderCell value="id" classNames={[ "id" ]}/>
      <HeaderCell value="name" classNames={[ "name" ]}/>
      <HeaderCell value="city" classNames={[ "city" ]}/>
      <HeaderCell value="total income" classNames={[ "total-income" ]}/>
      <HeaderCell value="average income" classNames={[ "average-income" ]}/>
      <HeaderCell value="last month income" classNames={[ "last-month-income" ]}/>
    </div>
  );
};

export default HeaderTable;
