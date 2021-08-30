import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class People extends Component {
  static propTypes = {
    people: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })),
    filterQuery: PropTypes.string
  };

  filterPeople = (people, filter) => 
    people.filter(({ name }) => 
      name.toLowerCase().includes(filter.toLowerCase()));

  getPeople = people => this.filterPeople(people, this.props.filterQuery)
    .map(({ name, id }) => (
      <div key={id} className="App-box">{name}</div>
    ));

  render() {
    return (
      <div>
        {this.getPeople(this.props.people)}
      </div>
    );
  }
}

const mapStateToProps = ({ peopleReducer }) => ({
  people: peopleReducer.people,
  filterQuery: peopleReducer.filterQuery
});

export default connect(mapStateToProps)(People);
