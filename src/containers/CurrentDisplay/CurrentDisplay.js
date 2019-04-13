import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class CurrentDisplay extends Component {

  render() {
    const { current, details, today } = this.props;
    return (
      <div className="CurrentDisplay">
        <div className="CurrentWeather">
          <h3>{details.city}</h3>
          <h4>{current.summary}</h4>
          <span>{current.temperature}</span>
        </div>
        <div className="Today-Container">
          <h5 className="todayDay">{today.time} <span>today</span></h5>
          <section className="tempLevels">
            <h6 className="tempHigh">{today.tempHigh}</h6>
            <h6 className="tempLow">{today.tempLow}</h6>
          </section>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  today: state.today,
  current: state.current,
  details: state.details,
  hourly: state.hourly,
  weekly: state.weekly
})


export default connect(mapStateToProps)(CurrentDisplay)
