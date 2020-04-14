import React, { Component } from 'react';
import PageList from "../../components/misc/PageList";
import WrapperCorner from "../../components/misc/WrapperCorner";
import HeaderTable from "../../components/misc/HeaderTable";
import CompanyList from "../../components/company/CompanyList";

import "./scss/company-container.scss";

class CompanyContainer extends Component {
  render () {
    return (
      <div id="company">
        <PageList
          countPage={ 1 }
          currentPage={ 1 }
        />
        <WrapperCorner>
          <HeaderTable/>
          <CompanyList companies={[]}/>
        </WrapperCorner>
      </div>
    );
  }
}

export default CompanyContainer;
