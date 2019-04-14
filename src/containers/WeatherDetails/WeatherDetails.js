import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
export class WeatherDetails extends Component {

  render(){
    return (
      <div className="WeatherDetails">
        <div className="WeatherDetails-Content">
          <NavLink className="Details-Close" to="/">
            <i className="fas fa-window-close"></i>
          </NavLink>
          <div className="Details-Content">
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Today's Summary</label>
                <h5 className="Summary">{this.props.today.summary}</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Sunrise</label>
                <h5 className="rise">{this.props.today.sunriseTime}</h5>
              </section>
              <section className="Details-Col">
                <label>Sunset</label>
                <h5 className="rise">{this.props.today.sunsetTime}</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Wind speed</label>
                <h5 className="wind">{this.props.today.windSpeed} mph</h5>
              </section>
              <section className="Details-Col">
                <label>humidity</label>
                <h5 className="humidity">{this.props.today.humidity}%</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>visibility</label>
                <h5 className="visibility">{this.props.today.visibility} mi</h5>
              </section>
              <section className="Details-Col">
                <label>Uv index</label>
                <h5 className="uvIndex">{this.props.today.uvIndex}</h5>
              </section>
            </div>
            <div className="Details-Row">
              <section className="Details-Col">
                <label>Chance of rain</label>
                <h5 className="precipProbability">{this.props.today.precipProbability}%</h5>
              </section>
              <section className="Details-Col">
                <label>Moon phase</label>
                <h5 className="moonPhase">{this.props.today.moonPhase}%</h5>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  current: state.current,
  today: state.today,
})


export default connect(mapStateToProps)(WeatherDetails)

// apparentTemperature:
// 66
// humidity:
// 0.18
// icon:
// "partly-cloudy-day"
// pressure:
// 1003.69
// summary:
// "Partly Cloudy"
// temperature:
// 66
// time:
// 1555276440
// uvIndex:
// 4
// visibility:
// 3.82
