import React, { Component } from 'react';
import { connect } from "react-redux";
import { filter } from "../../store/actions";
import Filter from "../../components/filter/Filter";

const mapStateToProps = state => ({
  isPending: state.requestReducer.isPending
});

const mapDispatchToProps = dispatch => ({
  filter: ( type, value ) => dispatch( filter( type, value ))
});

class FilterContainer extends Component {
  render () {
    const { filter, isPending } = this.props;

    return (
      <>
        <Filter filter={ filter } isPending={ isPending }/>
      </>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( FilterContainer );
