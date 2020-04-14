import React from 'react';
import { connect } from "react-redux";
import { requestCompanies } from "../../store/actions";
import CompanyContainer from "../company/CompanyContainer";
import FilterContainer from "../filter/FilterContainer";

import './scss/App.scss';

const mapDispatchToProps = dispatch => ({
  requestCompanies: () => dispatch( requestCompanies())
});

class App extends React.Component {
  componentDidMount () {
    this.props.requestCompanies();
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

export default connect( null, mapDispatchToProps )( App );
