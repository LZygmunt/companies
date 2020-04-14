import React from 'react';
import Input from "../misc/Input";

import "./scss/filter.scss";

const Filter = () => {
  return (
    <div id="filter">
      <h2>Filter by:</h2>
      <Input
        id="company-id"
        name="company-id"
        type="text"
        label="ID"
      />
      <Input
        id="company-name"
        name="company-name"
        type="text"
        label="NAME"
      />
      <Input
        id="company-city"
        name="company-city"
        type="text"
        label="CITY"/>
      <Input
        id="company-total-income"
        name="company-total-income"
        type="text"
        label="TOTAL INCOME"
      />
      <Input
        id="company-average-income"
        name="company-average-income"
        type="text"
        label="AVERAGE INCOME"
      />
      <Input
        id="company-last-month-income"
        name="company-last-month-income"
        type="text"
        label="LAST MONTH INCOME"
      />
    </div>
  );
};

export default Filter;
