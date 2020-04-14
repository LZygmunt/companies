import React, { Component } from 'react';
import { connect } from "react-redux";
import { requestIncomes } from "../../store/actions";
import { DECREASE, INCREASE, REQUEST_COMPANIES_PENDING } from "../../store/utils/constans";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import CompanyList from "../../components/company/CompanyList";
import HeaderTable from "../../components/misc/HeaderTable";
import WrapperCorner from "../../components/misc/WrapperCorner";
import PageList from "../../components/misc/PageList";

import "./scss/company-container.scss";

const mapStateToProps = state => ({
  companies: state.requestReducer.companies,
  incomes: state.requestReducer.incomes,
  isPending: state.requestReducer.isPending,
  error: state.requestReducer.error,
  id: state.filterReducer.id,
  name: state.filterReducer.name,
  city: state.filterReducer.city,
  totalIncome: state.filterReducer.totalIncome,
  averageIncome: state.filterReducer.averageIncome,
  lastMonthIncome: state.filterReducer.lastMonthIncome,
});

const mapDispatchToProps = dispatch => ({
  requestIncome: companyId => dispatch( requestIncomes( companyId ))
});

class CompanyContainer extends Component {
  state = {
    currentPage: 1,
    resultsNumber: 10
  };

  filteredCompanies = () => {
    const {
      companies,
      id,
      name,
      city,
      averageIncome,
      totalIncome,
      lastMonthIncome
    } = this.props;

    return companies.filter( company =>
      company.id.toString().toLowerCase().includes( id.toString().toLowerCase())
      && company.name.toLowerCase().includes( name.toLowerCase())
      && company.city.toLowerCase().includes( city.toLowerCase())
      // && company.averageIncome.toString().toLowerCase().includes( averageIncome.toString().toLowerCase())
      // && company.totalIncome.toString().toLowerCase().includes( totalIncome.toString().toLowerCase())
      // && company.lastMonthIncome.toString().toLowerCase().includes( lastMonthIncome.toString().toLowerCase())
    );
  };

  setCountPage = () => {
    const { resultsNumber } = this.state;
    const filteredCompanies = this.filteredCompanies();

    let countPage = filteredCompanies.length / resultsNumber;
    let rest = countPage % 10;
    if ( rest !== 0 ) countPage = countPage - rest + 1;
    if ( countPage === 0 ) return 1;
    return countPage;
  };

  setDisplayCompanies = () => {
    const { resultsNumber, currentPage } = this.state;
    let filteredCompanies = this.filteredCompanies();

    return filteredCompanies.slice( resultsNumber * currentPage - resultsNumber, resultsNumber * currentPage );
  };

  setPage = type => {
    const { countPage, currentPage } = this.state;

    if ( type === INCREASE && currentPage < countPage ) {
      this.setState( prevState => ({
        currentPage: prevState.currentPage + 1
      }));
    } else if ( type === DECREASE && currentPage > 1) {
      this.setState( prevState => ({
        currentPage: prevState.currentPage - 1
      }));
    }
  };

  // setIncome = () => {
  //   let { companies, requestIncome } = this.props;
  //
  //   companies.forEach( company => company.id )
  // };

  render () {
    const { currentPage } = this.state;
    const { setDisplayCompanies, setPage, setCountPage } = this;

    return (
      <div id="company">
        <PageList
          countPage={ setCountPage()}
          currentPage={ currentPage }
          setPage={ setPage }
        />
        <WrapperCorner >
          <HeaderTable/>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={ currentPage }
              addEndListener={( node, done ) => {
                node.addEventListener( "transitionend", done, false );
              }}
              classNames="blink"
              timeout={ 500 }
            >
              <CompanyList companies={ setDisplayCompanies() }/>
            </CSSTransition>
          </SwitchTransition>
        </WrapperCorner>
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CompanyContainer );
