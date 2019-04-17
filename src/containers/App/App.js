import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Search } from '../Search/Search';
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay';
import HourlyDisplay from '../HourlyDisplay/HourlyDisplay';
import WeeklyDisplay from '../WeeklyDisplay/WeeklyDisplay';
import WeatherDetails from '../WeatherDetails/WeatherDetails'
import { Loading } from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import * as actions from '../../actions/index';
import { cleanCurrently, cleanHourly, cleanToday, cleanWeek } from '../../utility/cleanReports';

export class App extends Component {

  componentDidMount() {
    this.getUserLocation();
  }

  getWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/weather/${latitude}/${longitude}`)
      if(!response.ok) { throw new Error('Fetch Call Cannot Be Made')}
      const data = await response.json()
      const currentData = cleanCurrently(data[0])
      this.props.setCurrent(currentData)
      const hourlyData = cleanHourly(data[0].hourly)
      this.props.setHourly(hourlyData)
      const todayData = cleanToday(data[0].daily)
      this.props.setToday(todayData)
      const weekData = cleanWeek(data[0].daily)
      this.props.setWeekly(weekData)
      this.props.setDetails(data[1])
      this.props.setLoading(false)
    } catch (error) {
      this.props.setError(error.message)
    }
  }

  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      this.getWeather(latitude, longitude)
    });
  }

  handleSearch = (latitude, longitude) => {
    this.getWeather(latitude,longitude)
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <div className="marvel-device iphone-x">
          <div className="notch">
              <div className="camera"></div>
              <div className="speaker"></div>
          </div>
          <div className="top-bar"></div>
          <div className="sleep"></div>
          <div className="bottom-bar"></div>
          <div className="volume"></div>
          <div className="overflow">
              <div className="shadow shadow--tr"></div>
              <div className="shadow shadow--tl"></div>
              <div className="shadow shadow--br"></div>
              <div className="shadow shadow--bl"></div>
          </div>
          <div className="inner-shadow"></div>
          <div className="screen">
          {
            loading ?
            <Loading /> :
            <div className="Weather-Content">
              <Route path="/" component={Header} />
              <Route path="/Search" render={() => {
                return <Search handleSearch={this.handleSearch} />
              }}/>
              <CurrentDisplay />
              <HourlyDisplay />
              <WeeklyDisplay />
              <NavLink className="Button-Container" to="/WeatherDetails">
                <div className="Details-Button">
                  <i className="fas fa-plus-square"></i>
                </div>
              </NavLink>
              <Route exact path="/WeatherDetails" component={WeatherDetails} />
            </div>
          }
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  setToday: (data) => dispatch(actions.setToday(data)),
  setCurrent: (data) => dispatch(actions.setCurrent(data)),
  setDetails: (data) => dispatch(actions.setDetails(data)),
  setHourly: (data) => dispatch(actions.setHourly(data)),
  setWeekly: (data) => dispatch(actions.setWeek(data)),
  setError: (data) => dispatch(actions.setError(data)),
  setLoading: (data) => dispatch(actions.setLoading(data))
})

App.propTypes = {
  setToday: PropTypes.func,
  setCurrent: PropTypes.func,
  setDetails: PropTypes.func,
  setHourly: PropTypes.func,
  setWeekly: PropTypes.func,
  setError: PropTypes.func,
  setLoading: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
