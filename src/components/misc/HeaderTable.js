import React from 'react';
import HeaderCell from "./HeaderCell";

import "./scss/header-table.scss";

const HeaderTable = ({ sort }) => {
  return (
    <div id="header-table">
      <HeaderCell
        value="id"
        classNames={[ "id" ]}
        sort={ sort }
      />
      <HeaderCell
        value="name"
        classNames={[ "name" ]}
        sort={ sort }
      />
      <HeaderCell
        value="city"
        classNames={[ "city" ]}
        sort={ sort }
      />
      <HeaderCell
        value="total income"
        classNames={[ "total-income" ]}
        sort={ sort }
      />
      <HeaderCell
        value="average income"
        classNames={[ "average-income" ]}
        sort={ sort }
      />
      <HeaderCell
        value="last month income"
        classNames={[ "last-month-income" ]}
        sort={ sort }
      />
    </div>
  );
};

export default HeaderTable;
