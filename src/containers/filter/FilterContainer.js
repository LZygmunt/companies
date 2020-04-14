import React, { Component } from 'react';
import { connect } from "react-redux";
import { filter } from "../../store/actions";
import Filter from "../../components/filter/Filter";

const mapDispatchToProps = dispatch => ({
  filter: ( type, value ) => dispatch( filter( type, value ))
});

class FilterContainer extends Component {
  render () {
    return (
      <>
        <Filter filter={ this.props.filter }/>
      </>
    );
  }
}

export default connect( null, mapDispatchToProps )( FilterContainer );
