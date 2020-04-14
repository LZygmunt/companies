import React from 'react';
import CompanyContainer from "../company/CompanyContainer";
import FilterContainer from "../filter/FilterContainer";

import './scss/App.scss';

class App extends React.Component {
  render () {
    return (
      <div id="app">
        <FilterContainer />
        <CompanyContainer />
      </div>
    );
  }
}

export default App;
