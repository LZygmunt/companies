import React from 'react';
import Cell from "../misc/Cell";

import "../misc/scss/grid.scss";

const CompanyItem = ({
  id,
  name,
  city,
  totalIncome,
  averageIncome,
  lastMonthIncome
}) => {
  return (
    <div className="company-item grid">
      <Cell value={ id } classNames={[ "id" ]}/>
      <Cell value={ name } classNames={[ "name" ]}/>
      <Cell value={ city } classNames={[ "city" ]}/>
      <Cell value={ totalIncome } classNames={[ "total-income" ]}/>
      <Cell value={ averageIncome } classNames={[ "average-income" ]}/>
      <Cell value={ lastMonthIncome } classNames={[ "last-month-income" ]}/>
    </div>
  );
};

export default CompanyItem;
