import React from 'react';
import HeaderCell from "./HeaderCell";
import { REQUEST_COMPANIES_PENDING } from "../../store/utils/constans";

import "./scss/grid.scss";

const isSmall = width => width <= 1024;

const HeaderTable = ({ sort, isPending }) => {
  const [ screenWidth, setScreenWidth ] = React.useState( 0 );

  React.useEffect(() => {
    setScreenWidth( window.innerWidth );
  }, []);

  return (
    <div id="header-table" className="grid">
      <HeaderCell
        value="id"
        classNames={[ "id", isPending === REQUEST_COMPANIES_PENDING ? "disabled" : null ]}
        sort={ isPending === REQUEST_COMPANIES_PENDING ? null : sort}
      />
      <HeaderCell
        value="name"
        classNames={[ "name", isPending === REQUEST_COMPANIES_PENDING ? "disabled" : null ]}
        sort={ isPending === REQUEST_COMPANIES_PENDING ? null : sort }
      />
      <HeaderCell
        value="city"
        classNames={[ "city", isPending === REQUEST_COMPANIES_PENDING ? "disabled" : null ]}
        sort={ isPending === REQUEST_COMPANIES_PENDING ? null : sort }
      />
      <HeaderCell
        value={ "total" + ( isSmall( screenWidth ) ? "" : " income" )}
        classNames={[ "total-income", isPending !== "" ? "disabled" : null ]}
        sort={ isPending !== "" ? null : sort }
      />
      <HeaderCell
        value={ "average" + ( isSmall( screenWidth ) ? "" : " income" )}
        classNames={[ "average-income", isPending !== "" ? "disabled" : null ]}
        sort={ isPending !== "" ? null : sort  }
      />
      <HeaderCell
        value={ "last month" + ( isSmall( screenWidth ) ? "" : " income" )}
        classNames={[ "last-month-income", isPending !== "" ? "disabled" : null ]}
        sort={ isPending !== "" ? null : sort  }
      />
    </div>
  );
};

export default HeaderTable;
