import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Filter extends Component {
  static propTypes = {
    updateSearchQuery: PropTypes.func.isRequired,
    filterQuery: PropTypes.string
  };

  handleInputChange = e => {
    this.props.updateSearchQuery(e.target.value);
  }

  render() {
    return (
      <div className='App-box'>
        <input onChange={this.handleInputChange} value={this.filterQuery} type="text" />
      </div>
    );
  }
}

const mapStateToProps = ({ peopleReducer }) => ({
  filterQuery: peopleReducer.filterQuery
});


const mapDispatchToProps = dispatch => bindActionCreators({
  updateSearchQuery: (payload) => dispatch({ type: 'UPDATE_QUERY', payload })
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
