import { cleanCurrently, cleanHourly, cleanToday, cleanWeek } from '../cleanReports';

describe('cleanReports', () => {

  it('should return mockExpectedCleanData when mockCurrentData is passed through cleanCurrently', () => {
    let mockCurrentData = {
      currently: {
        apparentTemperature: 61.8,
        cloudCover: 0.89,
        pressure: 1005.91,
        humidity: 0.21,
        icon: "partly-cloudy-night",
        summary: "Mostly Cloudy",
        temperature: 61.8,
        time: 1555294863,
        uvIndex: 0,
        visibility: 4.14,
        windBearing: 166,
        windGust: 8.06,
        windSpeed: 8.06,
      },
    }

    let mockExpectedCleanData = {
      apparentTemperature: 62,
      humidity: 0.21,
      icon: "partly-cloudy-night",
      pressure: 1005.91,
      summary: "Mostly Cloudy",
      temperature: 62,
      time: 1555294863,
      uvIndex: 0,
      visibility: 4.14,
      windSpeed: 8.06,
    }
    const result = cleanCurrently(mockCurrentData)
    expect(result).toEqual(mockExpectedCleanData)
  })

  it('should return mockExpectedHourlyData when mockHourlyData is passed through cleanHourly', () => {
    let mockHourlyData = {
      data: [
        { icon: "partly-cloudy-night", summary: "Mostly Cloudy", temperature: 62.82, time: 1555293600 },
        { icon: "cloudy", summary: "Overcast", temperature: 59.91, time: 1555297200 },
        { icon: "partly-cloudy-night", summary: "Mostly Cloudy", temperature: 55.72, time: 1555300800 },
      ],
      icon: "partly-cloudy-day",
      summary: "Mostly cloudy throughout the day.",
    }

    let mockExpectedHourlyData = [
      {time: "20", icon: "partly-cloudy-night", temperature: 63},
      {time: "21", icon: "cloudy", temperature: 60},
      {time: "22", icon: "partly-cloudy-night", temperature: 56}
    ]

    const result = cleanHourly(mockHourlyData)
    expect(result).toEqual(mockExpectedHourlyData)
  })

  it('should return mockExpectedTodayData when mockTodayData is passed through cleanToday', () => {
    let mockTodayData = {
      data: [{
        humidity: 0.37,
        icon: "partly-cloudy-day",
        precipProbability: 0,
        moonPhase: 0.33,
        pressure: 1007.4,
        summary: "Mostly cloudy throughout the day.",
        sunriseTime: 1555244715,
        sunsetTime: 1555292271,
        temperatureHigh: 65.69,
        temperatureLow: 41.7,
        time: 1555221600,
        uvIndex: 6,
        uvIndexTime: 1555268400,
        visibility: 4.44,
        windBearing: 183,
        windGust: 20.57,
        windGustTime: 1555282800,
        windSpeed: 1.98,
      }],
      icon: "rain",
      summary: "Light rain on Thursday and next Sunday, with high temperatures bottoming out at 57°F on Wednesday."
    }

    let mockExpectedTodayData = {
      humidity: 37,
      moonPhase: 33,
      precipProbability: 0,
      summary: "Mostly cloudy throughout the day.",
      sunriseTime: "6:25 AM",
      sunsetTime: "7:37 PM",
      tempHigh: 66,
      tempLow: 42,
      time: "Sunday",
      uvIndex: 6,
      visibility: 4.44,
      windSpeed: 1.98,
    }

    const result = cleanToday(mockTodayData)
    expect(result).toEqual(mockExpectedTodayData)
  })

  it('should return mockExpectedWeekData when mockWeekData is passed through cleanWeek', () => {
    let mockWeekData = {
      data: [
        {
          humidity: 0.37,
          icon: "partly-cloudy-day",
          temperatureHigh: 65.69,
          temperatureLow: 41.7,
          time: 1555221600,
        },
        {
          humidity: 0.32,
          icon: "partly-cloudy-day",
          temperatureHigh: 73.59,
          temperatureLow: 43.56,
          time: 1555308000,
        },
        {
          humidity: 0.33,
          icon: "partly-cloudy-day",
          temperatureHigh: 71.76,
          temperatureLow: 45.06,
          time: 1555394400,
        },
        {
          humidity: 0.53,
          icon: "partly-cloudy-day",
          temperatureHigh: 56.59,
          temperatureLow: 37.43,
          time: 1555480800,
        }
      ],
      icon: "rain",
      summary: "Light rain on Thursday and next Sunday, with high temperatures bottoming out at 57°F on Wednesday."
    }

    let mockExpectedWeekData = [
      { icon: "partly-cloudy-day", tempHigh: 74, tempLow: 44, time: "Monday" },
      { icon: "partly-cloudy-day", tempHigh: 72, tempLow: 45, time: "Tuesday" },
      { icon: "partly-cloudy-day", tempHigh: 57, tempLow: 37, time: "Wednesday" }
    ]

    const result = cleanWeek(mockWeekData)
    expect(result).toEqual(mockExpectedWeekData)
  })

})
