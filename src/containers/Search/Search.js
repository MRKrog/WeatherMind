import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';

export class Search extends Component {

  handleSeleted = (location) => {
    console.log(location);
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
