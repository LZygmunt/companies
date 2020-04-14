import React from 'react';
import Input from "../misc/Input";
import {
    SET_FILTER_AVERAGE_INCOME,
    SET_FILTER_CITY,
    SET_FILTER_ID,
    SET_FILTER_LAST_MONTH_INCOME,
    SET_FILTER_NAME,
    SET_FILTER_TOTAL_INCOME
} from "../../store/utils/constans";

import "./scss/filter.scss";

const Filter = ({ filter }) => {
  return (
    <div id="filter">
      <h2>Filter by:</h2>
      <Input
        id="company-id"
        name="company-id"
        type="number"
        label="ID"
        filter={ filter }
        actionType={ SET_FILTER_ID }
      />
      <Input
        id="company-name"
        name="company-name"
        type="text"
        label="NAME"
        filter={ filter }
        actionType={ SET_FILTER_NAME }
      />
      <Input
        id="company-city"
        name="company-city"
        type="text"
        label="CITY"
        filter={ filter }
        actionType={ SET_FILTER_CITY }
      />
      <Input
        id="company-total-income"
        name="company-total-income"
        type="number"
        label="TOTAL INCOME"
        filter={ filter }
        actionType={ SET_FILTER_TOTAL_INCOME }
      />
      <Input
        id="company-average-income"
        name="company-average-income"
        type="number"
        label="AVERAGE INCOME"
        filter={ filter }
        actionType={ SET_FILTER_AVERAGE_INCOME }
      />
      <Input
        id="company-last-month-income"
        name="company-last-month-income"
        type="number"
        label="LAST MONTH INCOME"
        filter={ filter }
        actionType={ SET_FILTER_LAST_MONTH_INCOME }
      />
    </div>
  );
};

export default Filter;
