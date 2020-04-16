import React from 'react';
import { connect } from "react-redux";
import {
  requestCompanies,
  requestIncomes,
  requestIncomesPendingEnable,
  requestIncomesPendingDisable
} from "../../store/actions";
import CompanyContainer from "../company/CompanyContainer";
import FilterContainer from "../filter/FilterContainer";

import './scss/App.scss';

const mapStateToProps = state => ({
  companies: state.requestReducer.companies,
  incomes: state.requestReducer.incomes
});

const mapDispatchToProps = dispatch => ({
  requestCompanies: () => dispatch( requestCompanies()),
  requestIncome: companyId => dispatch( requestIncomes( companyId )),
  requestIncomesPendingEnable: () => dispatch( requestIncomesPendingEnable()),
  requestIncomesPendingDisable: () => dispatch( requestIncomesPendingDisable()),
});

class App extends React.Component {
  componentDidMount () {
    this.props.requestCompanies();
  }

  componentDidUpdate ( prevProps, prevState, snapshot ) {
    const {
      companies,
      requestIncome,
      incomes,
      requestIncomesPendingEnable,
      requestIncomesPendingDisable
    } = this.props;
    if ( prevProps.companies !== companies ) {
      requestIncomesPendingEnable();
      companies.forEach( company => requestIncome( company.id ));
    }
    if ( incomes.length > 0 && companies.length === incomes.length ) {
      requestIncomesPendingDisable();
    }
  }

  render () {
    return (
      <div id="app">
        <FilterContainer />
        <CompanyContainer />
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );
