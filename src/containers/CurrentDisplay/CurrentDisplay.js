import React, { Component } from 'react';
import { connect } from 'react-redux';


export class CurrentDisplay extends Component {

  render() {
    return (
      <div className="CurrentDisplay">
        <div className="Today-Container">
          ageagae
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentWeather: state.currentWeather
})


export default connect(mapStateToProps)(CurrentDisplay)
