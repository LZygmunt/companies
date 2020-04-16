import React from 'react';
import CompanyItem from "./CompanyItem";

import "./scss/company-list.scss";

const CompanyList = ({ companies }) => {
  let mapCompanies = companies.map( company => <CompanyItem
    name={ company.name }
    averageIncome={ company.averageIncome ? company.averageIncome : 0 }
    lastMonthIncome={ company.lastMonthIncome ? company.lastMonthIncome : 0 }
    totalIncome={ company.totalIncome ? company.totalIncome : 0 }
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
