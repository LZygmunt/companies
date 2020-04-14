import React, { Component } from 'react';
import { connect } from "react-redux";
import { DECREASE, INCREASE, REQUEST_COMPANIES_PENDING } from "../../store/utils/constans";
import { requestIncomes } from "../../store/actions";
import CompanyList from "../../components/company/CompanyList";
import HeaderTable from "../../components/misc/HeaderTable";
import WrapperCorner from "../../components/misc/WrapperCorner";
import PageList from "../../components/misc/PageList";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./scss/company-container.scss";

const mapStateToProps = state => ({
  companies: state.requestReducer.companies,
  incomes: state.requestReducer.incomes,
  isPending: state.requestReducer.isPending,
  error: state.requestReducer.error
});

const mapDispatchToProps = dispatch => ({
  requestIncome: companyId => dispatch( requestIncomes( companyId ))
});

class CompanyContainer extends Component {
  state = {
    currentPage: 1,
    countPage: 1,
    resultsNumber: 10
  };

  componentDidUpdate ( prevProps, prevState, snapshot ) {
    if ( prevProps.isPending === REQUEST_COMPANIES_PENDING ) {
      this.setCountPage();
    }
  }

  setCountPage = () => {
    const { companies } = this.props;
    const { resultsNumber } = this.state;

    let countPage = companies.length / resultsNumber;
    let rest = countPage % 10;
    if ( rest !== 0 ) countPage = countPage - rest + 1;

    this.setState({ countPage: countPage })
  };

  setDisplayCompanies = () => {
    const { resultsNumber, currentPage } = this.state;
    const { companies } = this.props;
    return companies.slice( resultsNumber * currentPage - resultsNumber, resultsNumber * currentPage );
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
    const { currentPage, countPage } = this.state;
    const { setDisplayCompanies, setPage } = this;

    return (
      <div id="company">
        <PageList
          countPage={ countPage }
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
