import React from 'react';
import HeaderCell from "./HeaderCell";
import { REQUEST_COMPANIES_PENDING } from "../../store/utils/constans";

import "./scss/header-table.scss";

const voidFunction = () => null;

const HeaderTable = ({ sort, isPending }) => {
  return (
    <div id="header-table">
      <HeaderCell
        value="id"
        classNames={[ "id", isPending === REQUEST_COMPANIES_PENDING ? "disabled" : "" ]}
        sort={ isPending === REQUEST_COMPANIES_PENDING ? voidFunction : sort }
      />
      <HeaderCell
        value="name"
        classNames={[ "name", isPending === REQUEST_COMPANIES_PENDING ? "disabled" : "" ]}
        sort={ isPending === REQUEST_COMPANIES_PENDING ? voidFunction : sort }
      />
      <HeaderCell
        value="city"
        classNames={[ "city", isPending === REQUEST_COMPANIES_PENDING ? "disabled" : "" ]}
        sort={ isPending === REQUEST_COMPANIES_PENDING ? voidFunction : sort }
      />
      <HeaderCell
        value="total income"
        classNames={[ "total-income", isPending !== "" ? "disabled" : "" ]}
        sort={ isPending !== "" ? voidFunction : sort }
      />
      <HeaderCell
        value="average income"
        classNames={[ "average-income", isPending !== "" ? "disabled" : "" ]}
        sort={ isPending !== "" ? voidFunction : sort  }
      />
      <HeaderCell
        value="last month income"
        classNames={[ "last-month-income", isPending !== "" ? "disabled" : "" ]}
        sort={ isPending !== "" ? voidFunction : sort  }
      />
    </div>
  );
};

export default HeaderTable;
