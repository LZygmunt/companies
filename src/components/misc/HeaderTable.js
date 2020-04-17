import React from 'react';
import HeaderCell from "./HeaderCell";
import { REQUEST_COMPANIES_PENDING } from "../../store/utils/constans";

import "./scss/grid.scss";

const voidFunction = () => null;

const isPhone = width => width <= 1024;

const HeaderTable = ({ sort, isPending }) => {
  const [ screenWidth, setScreenWidth ] = React.useState( 0 );

  React.useEffect(() => {
    setScreenWidth( window.innerWidth );
  });

  return (
    <div id="header-table" className="grid">
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
        value={ "total" + ( isPhone( screenWidth ) ? "" : " income" )}
        classNames={[ "total-income", isPending !== "" ? "disabled" : "" ]}
        sort={ isPending !== "" ? voidFunction : sort }
      />
      <HeaderCell
        value={ "average" + ( isPhone( screenWidth ) ? "" : " income" )}
        classNames={[ "average-income", isPending !== "" ? "disabled" : "" ]}
        sort={ isPending !== "" ? voidFunction : sort  }
      />
      <HeaderCell
        value={ "last month" + ( isPhone( screenWidth ) ? "" : " income" )}
        classNames={[ "last-month-income", isPending !== "" ? "disabled" : "" ]}
        sort={ isPending !== "" ? voidFunction : sort  }
      />
    </div>
  );
};

export default HeaderTable;
