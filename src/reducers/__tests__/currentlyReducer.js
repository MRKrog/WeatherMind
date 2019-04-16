import { currentlyReducer } from '../currentlyReducer';

const mockCurrent = {
  apparentTemperature: 73,
  humidity: 0.15,
  icon: "partly-cloudy-day",
  pressure: 1001.47,
  summary: "Mostly Cloudy",
  temperature: 73,
  time: 1555359672,
  uvIndex: 5,
  visibility: 6.34,
  windSpeed: 2.87,
}


describe('currentlyReducer', () => {

  it('should return the intial state', () => {
    // Setup
    const expected = {}
    // Execution
    const result = currentlyReducer(undefined, {})
    // Expectation
    expect(result).toEqual(expected)
  })

  it('should handle the SET_CURRENT Case', () => {

    const mockAction = {
      type: "SET_CURRENT",
      info: {
        apparentTemperature: 73,
        humidity: 0.15,
        icon: "partly-cloudy-day",
        pressure: 1001.47,
        summary: "Mostly Cloudy",
        temperature: 73,
        time: 1555359672,
        uvIndex: 5,
        visibility: 6.34,
        windSpeed: 2.87,
      }
    }

    const expected = {
      apparentTemperature: 73,
      humidity: 0.15,
      icon: "partly-cloudy-day",
      pressure: 1001.47,
      summary: "Mostly Cloudy",
      temperature: 73,
      time: 1555359672,
      uvIndex: 5,
      visibility: 6.34,
      windSpeed: 2.87,
    }
    expect(currentlyReducer({}, mockAction))
  })

})
