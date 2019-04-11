import React, { Component } from 'react';
import { CurrentDisplay } from '../../containers/CurrentDisplay/CurrentDisplay';
import { HourDetail } from '../../components/HourDetail/HourDetail';
import { Header } from '../../components/Header/Header';
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
    this.getWeather()
  }

  getWeather = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/weather')
      const data = await response.json()
      const currentData = cleanCurrently(data)
      const hourlyData = cleanHourly(data.hourly)
      const todayData = cleanToday(data.daily)
      const weekData = cleanWeek(data.daily)
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
        <Header />
        <CurrentDisplay today={this.state.today} />
        <section className="HourlyReport">
          {hourlyReport}
        </section>

          <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          <h4>{moment.unix(1554940800).format("dddd MMM Do")}</h4>
          <h4>{moment.unix(1554966000).format("dddd MMM Do")}</h4>

      </div>
    );
  }
}

export default App;
