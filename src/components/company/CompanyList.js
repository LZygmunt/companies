import React from 'react';
import CompanyItem from "./CompanyItem";

import "./scss/company-list.scss";

const CompanyList = ({ companies }) => {
  let mapCompanies = companies.map( company => <CompanyItem
    name={ company.name }
    averageIncome={ company.averageIncome ? company.averageIncome : "No Data" }
    lastMonthIncome={ company.lastMonthIncome ? company.lastMonthIncome : "No Data" }
    totalIncome={ company.totalIncome ? company.totalIncome : "No Data" }
    city={ company.city }
    id={ company.id }
    key={ company.id }
  />);

  return (
    <div id="company-list">
      { mapCompanies }
    </div>
  );
};

export default CompanyList;
