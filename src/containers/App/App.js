import React, { Component } from 'react';
import CurrentDisplay from '../../containers/CurrentDisplay/CurrentDisplay';
import { Search } from '../../containers/Search/Search';
import { HourDetail } from '../../components/HourDetail/HourDetail';
import { Header } from '../../components/Header/Header';
import { connect } from 'react-redux';
import { setWeather } from '../../actions/index';

import { cleanCurrently, cleanHourly, cleanToday, cleanWeek } from '../../utility/cleanReports';
import moment from "moment";


class App extends Component {
  constructor() {
    super()
    this.state = {
      today: [],
      hourly: [],
      currently: [],
      weekly: []
    }
  }

  componentDidMount() {
    this.getUserLocation();
  }

  getWeather = async (latitude, longitude) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/weather/${latitude}/${longitude}`)
      const data = await response.json()

      console.log(data);
      const currentData = cleanCurrently(data)
      const hourlyData = cleanHourly(data.hourly)
      const todayData = cleanToday(data.daily)
      const weekData = cleanWeek(data.daily)
      // this.props.handleCurrent(currentData)
      // console.log(this.props);
      this.setState({
        today: todayData,
        currently: currentData,
        hourly: hourlyData,
        weekly: weekData
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  getUserLocation = () => {
    console.log('in user');
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      console.log('position', position.coords);
      this.getWeather(latitude, longitude)
    });
  }

  handleSearch = (latitude, longitude) => {
    console.log('search, lat', latitude);
    console.log('search, long', longitude);
    this.getWeather(latitude,longitude)
  }


  render() {
    const { hourly } = this.state;
    let hourlyReport;

    if(Object.keys(this.state.hourly).length) {
      hourlyReport = hourly.map(hour => {
        return <HourDetail key={hour.time} time={hour.time} icon={hour.icon} temperature={hour.temperature} />
      })
    }


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
            <Header />
            <Search handleSearch={this.handleSearch}/>
            <CurrentDisplay />
            <section className="HourlyReport">
              {hourlyReport}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentWeather: state.currentWeather
})

export const mapDispatchToProps = (dispatch) => ({
  handleCurrent: (data) => dispatch(setWeather(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
