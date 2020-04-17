import React from 'react';
import Input from "../misc/Input";
import {
  REQUEST_COMPANIES_PENDING,
  SET_FILTER_AVERAGE_INCOME_FROM,
  SET_FILTER_AVERAGE_INCOME_TO,
  SET_FILTER_CITY,
  SET_FILTER_ID,
  SET_FILTER_LAST_MONTH_INCOME_FROM,
  SET_FILTER_LAST_MONTH_INCOME_TO,
  SET_FILTER_NAME,
  SET_FILTER_TOTAL_INCOME_FROM,
  SET_FILTER_TOTAL_INCOME_TO
} from "../../store/utils/constans";

import "./scss/filter.scss";

const Filter = ({ filter, isPending, className }) => {
  return (
    <div id="filter" className={ className }>
      <h2>Filter by:</h2>
      <Input
        id="company-id"
        name="company-id"
        type="number"
        label="ID"
        disabled={ isPending === REQUEST_COMPANIES_PENDING }
        filter={ filter }
        actionType={ SET_FILTER_ID }
      />
      <Input
        id="company-name"
        name="company-name"
        type="text"
        label="NAME"
        disabled={ isPending === REQUEST_COMPANIES_PENDING }
        filter={ filter }
        actionType={ SET_FILTER_NAME }
      />
      <Input
        id="company-city"
        name="company-city"
        type="text"
        label="CITY"
        disabled={ isPending === REQUEST_COMPANIES_PENDING }
        filter={ filter }
        actionType={ SET_FILTER_CITY }
      />
      <p className="label">TOTAL INCOME</p>
      <Input
        id="company-total-income-from"
        name="company-total-income-from"
        type="number"
        label="FROM"
        disabled={ isPending !== ""}
        filter={ filter }
        actionType={ SET_FILTER_TOTAL_INCOME_FROM }
      />
      <Input
        id="company-total-income-to"
        name="company-total-income-to"
        type="number"
        label="TO"
        disabled={ isPending !== "" }
        filter={ filter }
        actionType={ SET_FILTER_TOTAL_INCOME_TO }
      />
      <p className="label">AVERAGE INCOME</p>
      <Input
        id="company-average-income-from"
        name="company-average-income-from"
        type="number"
        label="FROM"
        disabled={ isPending !== "" }
        filter={ filter }
        actionType={ SET_FILTER_AVERAGE_INCOME_FROM }
      />
      <Input
        id="company-average-income-to"
        name="company-average-income-to"
        type="number"
        label="TO"
        disabled={ isPending !== "" }
        filter={ filter }
        actionType={ SET_FILTER_AVERAGE_INCOME_TO }
      />
      <p className="label">LAST MONTH INCOME</p>
      <Input
        id="company-last-month-income-from"
        name="company-last-month-income-from"
        type="number"
        label="FROM"
        disabled={ isPending !== "" }
        filter={ filter }
        actionType={ SET_FILTER_LAST_MONTH_INCOME_FROM }
      />
      <Input
        id="company-last-month-income-to"
        name="company-last-month-income-to"
        type="number"
        label="TO"
        disabled={ isPending !== "" }
        filter={ filter }
        actionType={ SET_FILTER_LAST_MONTH_INCOME_TO }
      />
    </div>
  );
};

export default Filter;
