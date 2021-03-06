import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class WeatherDetails extends Component {

  render(){
    const { summary, sunriseTime, sunsetTime, windSpeed, humidity, visibility, uvIndex, precipProbability, moonPhase } = this.props.today
    return (
      <div className="WeatherDetails">
        <div className="WeatherDetails-Content">
          <NavLink className="Details-Close" to="/">
            <i className="fas fa-times"></i>
          </NavLink>
          <div className="Details-Content">
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Today's Summary</label>
                <h5 className="Summary">{summary}</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Sunrise</label>
                <h5 className="rise">{sunriseTime}</h5>
              </section>
              <section className="Details-Col">
                <label>Sunset</label>
                <h5 className="rise">{sunsetTime}</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Wind speed</label>
                <h5 className="wind">{windSpeed} mph</h5>
              </section>
              <section className="Details-Col">
                <label>humidity</label>
                <h5 className="humidity">{Math.floor(humidity)}%</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>visibility</label>
                <h5 className="visibility">{visibility} mi</h5>
              </section>
              <section className="Details-Col">
                <label>Uv index</label>
                <h5 className="uvIndex">{uvIndex}</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Chance of rain</label>
                <h5 className="precipProbability">{Math.floor(precipProbability)}%</h5>
              </section>
              <section className="Details-Col">
                <label>Moon phase</label>
                <h5 className="moonPhase">{moonPhase}%</h5>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  today: state.today,
})

WeatherDetails.propTypes = {
  today: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(WeatherDetails)
