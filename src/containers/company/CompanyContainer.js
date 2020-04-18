import React, { Component } from 'react';
import { connect } from "react-redux";
import { requestIncomes } from "../../store/actions";
import {
  DECREASE,
  INCREASE,
  REQUEST_COMPANIES_PENDING,
  REQUEST_INCOMES_PENDING
} from "../../store/utils/constants";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import CompanyList from "../../components/company/CompanyList";
import HeaderTable from "../../components/misc/HeaderTable";
import WrapperCorner from "../../components/misc/WrapperCorner";
import PageList from "../../components/misc/PageList";
import Loader from "../../components/misc/Loader";

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
  lastMonthIncome: state.filterReducer.lastMonthIncome
});

const mapDispatchToProps = dispatch => ({
  requestIncome: companyId => dispatch( requestIncomes( companyId ))
});

class CompanyContainer extends Component {
  state = {
    currentPage: 1,
    countPage: 1,
    resultsNumber: 10,
    companies: [],
    sortType: "",
    column: ""
  };

  componentDidUpdate ( prevProps, prevState, snapshot ) {
    const {
      isPending,
      id,
      name,
      city,
      totalIncome,
      averageIncome,
      lastMonthIncome,
      companies
    } = this.props;
    const {
      companies: companiesState,
      sortType,
      column
    } = this.state;
    const {
      setCountPage,
      filteredCompanies,
      quickSort
    } = this;

    if ( prevProps.isPending === REQUEST_COMPANIES_PENDING ) {
      this.setState({ companies: [ ...companies ] });
      setCountPage( companies );
    }

    if ( prevProps.isPending === REQUEST_INCOMES_PENDING && isPending === "") {
      const { incomes, companies } = this.props;
      let cmps = [ ...companies ];
      cmps.forEach( company => {
        let find = incomes.find( income => income.id === company.id );
        company.averageIncome = find.averageIncome;
        company.totalIncome = find.totalIncome;
        company.lastMonthIncome = find.lastMonthIncome;
      });
      this.setState({ companies: cmps })
    }

    if (
      prevProps.id !== id || prevProps.name !== name
      || prevProps.city !== city || prevProps.totalIncome !== totalIncome
      || prevProps.averageIncome !== averageIncome || prevProps.lastMonthIncome !== lastMonthIncome
    ) {
      setCountPage( filteredCompanies());
    }

    if ( !( prevState.sortType === sortType && prevState.column === column )) {
      let sortCompanies =
        quickSort( companiesState, 0, companiesState.length - 1, column, sortType );
      this.setState({ companies: sortCompanies });
    }
  }

  intervalCondition = ( arr, obj, el ) => {
    switch ( true ) {
      case +obj.from === 0 && +obj.to !== 0:
        return arr = arr.filter( item => +item[ el ] < +obj.to );
      case +obj.to === 0 && +obj.from !== 0:
        return arr = arr.filter( item => +item[ el ] > +obj.from);
      case +obj.from > 0 && +obj.to > 0 && +obj.to < +obj.from :
        return arr;
      case +obj.from > 0 && +obj.to > 0:
        return arr = arr.filter(
          item => +item[ el ] > +obj.from && +item[ el ] < +obj.to
        );
      default:
        return arr
    }
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
    const { sortType, column } = this.state;
    const { intervalCondition, quickSort } = this;

    let filteredCompanies = companies.filter( company =>
      company.id.toString().toLowerCase().includes( id.toString().toLowerCase())
      && company.name.toLowerCase().includes( name.toLowerCase())
      && company.city.toLowerCase().includes( city.toLowerCase())
    );

    filteredCompanies = intervalCondition( filteredCompanies, totalIncome, "totalIncome" );
    filteredCompanies = intervalCondition( filteredCompanies, averageIncome, "averageIncome" );
    filteredCompanies = intervalCondition( filteredCompanies, lastMonthIncome, "lastMonthIncome" );

    if ( sortType !== "" ) {
      filteredCompanies = quickSort( filteredCompanies, 0, filteredCompanies.length - 1, column, sortType );
    }

    this.setState({ companies: filteredCompanies });
    return filteredCompanies;
  };

  setCountPage = companies => {
    const { resultsNumber } = this.state;

    let countPage = companies.length / resultsNumber;
    let rest = countPage % 1;
    if ( rest !== 0 ) countPage = countPage - rest + 1;

    this.setState({
      countPage: countPage === 0 ? 1 : countPage,
      currentPage: 1
    });
  };

  setDisplayCompanies = () => {
    const {
      resultsNumber,
      currentPage,
      companies
    } = this.state;
    let start, end;

    start = resultsNumber * currentPage - resultsNumber;
    end = resultsNumber * currentPage;

    return companies.slice( start, end );
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

  swap = ( arr, i, j ) => {
    const temp = arr[ i ];
    arr[ i ] = arr[ j ];
    arr[ j ] = temp;
  };

  partition = ( arr, pivot, left, right, column, sortType ) => {
    const pivotValue = arr[ pivot ];
    let partitionIndex = left;

    for( let i = left; i < right; i++ ) {
      if ( sortType === "asc" && arr[ i ][ column ] < pivotValue[ column ] ) {
        this.swap( arr, i, partitionIndex );
        partitionIndex++;
      } else if ( sortType === "desc" && arr[ i ][ column ] > pivotValue[ column ] ) {
        this.swap( arr, i, partitionIndex );
        partitionIndex++;
      }
    }

    this.swap( arr, right, partitionIndex );
    return partitionIndex;
  };

  quickSort = ( arr, left, right, column, sortType ) => {
    let pivot, partitionIndex;

    if ( left < right ) {
      pivot = right;
      partitionIndex = this.partition( arr, pivot, left, right, column, sortType );

      this.quickSort( arr, left, partitionIndex - 1, column, sortType );
      this.quickSort( arr, partitionIndex + 1, right, column, sortType );
    }

    return arr;
  };

  sort = evt => {
    const { currentTarget } = evt;
    const { className, classList } = currentTarget.previousElementSibling;

    let column = classList[ 1 ].split( '-' );
    column.forEach(( string, index ) => ( index > 0 )
      ? column[ index ] = string[ 0 ].toUpperCase() + string.slice( 1 )
      : column[ index ]);
    column = column.join( '' );

    this.setState({ column: column });

    let nextEl = document
      .querySelector( `.${ className.replace( ' ', '.' )}` )
      .nextElementSibling;

    if ( currentTarget.dataset["direction"] === "down" ) {
      nextEl.dataset[ "direction" ] = "up";
      nextEl.children[ 0 ].classList.replace( "arrow-down", "arrow-up" );
      this.setState({ sortType: "asc" });
    } else if ( currentTarget.dataset["direction"] === "up" ) {
      nextEl.dataset[ "direction" ] = "down";
      nextEl.children[ 0 ].classList.replace( "arrow-up", "arrow-down" );
      this.setState({ sortType: "desc" });
    }
  };

  render () {
    const { isPending } = this.props;
    const { currentPage, countPage } = this.state;
    const {
      setDisplayCompanies,
      setPage,
      sort
    } = this;

    return (
      <div id="company">
        <PageList
          countPage={ countPage }
          currentPage={ currentPage }
          setPage={ setPage }
        />
        <WrapperCorner >
          <HeaderTable sort={ sort } isPending={ isPending }/>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={ currentPage }
              addEndListener={( node, done ) => {
                node.addEventListener( "transitionend", done, false );
              }}
              classNames="blink"
              timeout={ 500 }
            >
              <>
                <CompanyList companies={ setDisplayCompanies()}/>
                { isPending !== "" && <Loader classNames={
                  isPending === REQUEST_INCOMES_PENDING ? "upon-incomes": null
                }/> }
              </>
            </CSSTransition>
          </SwitchTransition>
        </WrapperCorner>
      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CompanyContainer );
