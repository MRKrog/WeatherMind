import { todayReducer } from '../todayReducer'

const mockAction = {
  type: "SET_TODAY",
  info: {
    humidity: 27,
    moonPhase: 37,
    precipProbability: 0,
    summary: "Mostly cloudy throughout the day.",
    sunriseTime: "6:23 AM",
    sunsetTime: "7:38 PM",
    tempHigh: 77,
    tempLow: 47,
    time: "Monday",
    uvIndex: 5,
    visibility: 6.09,
    windSpeed: 0.88,
  }
}

describe('todayReducer', () => {

  it('should return the initial state', () => {
    const expected = {}
    const result = todayReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the today object when SET_TODAY action type', () => {
    const expected = {
      humidity: 27,
      moonPhase: 37,
      precipProbability: 0,
      summary: "Mostly cloudy throughout the day.",
      sunriseTime: "6:23 AM",
      sunsetTime: "7:38 PM",
      tempHigh: 77,
      tempLow: 47,
      time: "Monday",
      uvIndex: 5,
      visibility: 6.09,
      windSpeed: 0.88,
    }
    const result = todayReducer({}, mockAction)
    expect(result).toEqual(expected)
  })

})
