import React from 'react';
import CompanyItem from "./CompanyItem";

const CompanyList = ({ companies }) => {
  return (
    <div id="company-list">
      <CompanyItem
        name="Name"
        averageIncome={ 0 }
        lastMonthIncome={ 0 }
        totalIncome={ 0 }
        city="City"
        id={ 1 }
      />
    </div>
  );
};

export default CompanyList;
