import React, { Component } from 'react';
import { connect } from "react-redux";
import { filter } from "../../store/actions";
import Filter from "../../components/filter/Filter";
import Hamburger from "../../components/misc/Hamburger";

const mapStateToProps = state => ({
  isPending: state.requestReducer.isPending
});

const mapDispatchToProps = dispatch => ({
  filter: ( type, value ) => dispatch( filter( type, value ))
});

class FilterContainer extends Component {
  state = {
    close: false
  };

  componentDidMount () {
    if ( window.innerWidth <= 1024 ) this.setState({ close: true })
  }

  handleClick = () => {
    this.setState(prevState => ({ close: !prevState.close }));
  };

  render () {
    const { filter, isPending } = this.props;

    return (
      <>
        <Hamburger
          handleClick={ this.handleClick }
          classNames={ this.state.close ? "" : "cross" }
        />
        <Filter
          filter={ filter }
          isPending={ isPending }
          className={ this.state.close ? "close" : null }
        />
      </>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( FilterContainer );
