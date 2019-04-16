import { hourlyReducer } from '../hourlyReducer';

const mockAction = {
  type: "SET_HOURLY",
  info: [
    { icon: "partly-cloudy-day", temperature: 75, time: "16" },
    { icon: "partly-cloudy-day", temperature: 77, time: "17" }
  ]
}

describe('hourlyReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = hourlyReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the hourly array when action type is SET_HOURLY', () => {
    const expected = [
      { icon: "partly-cloudy-day", temperature: 75, time: "16" },
      { icon: "partly-cloudy-day", temperature: 77, time: "17" }
    ]
    const result = hourlyReducer([], mockAction)
    expect(result).toEqual(expected)
  })

})
