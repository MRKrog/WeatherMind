import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import PropTypes from 'prop-types';

export class Search extends Component {

  handleSeleted = (location) => {
    const latitude = location.geometry.location.lat();
    const longitude = location.geometry.location.lng();
    this.props.handleSearch(latitude, longitude)
  }

  render() {
    return (
      <div className="Search">
        <Autocomplete onPlaceSelected={(location) => this.handleSeleted(location)} />
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}
