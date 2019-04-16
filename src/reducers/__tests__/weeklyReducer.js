import { weeklyReducer } from '../weeklyReducer'

const mockAction = {
  type: "SET_WEEK",
  info: [
    { icon: "partly-cloudy-day", tempHigh: 71, tempLow: 42, time: "Tuesday" },
    { icon: "partly-cloudy-day", tempHigh: 61, tempLow: 41, time: "Wednesday" }
  ]
}

describe('weeklyReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = weeklyReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should handle SET_WEEK', () => {
    const expected = [
      { icon: "partly-cloudy-day", tempHigh: 71, tempLow: 42, time: "Tuesday" },
      { icon: "partly-cloudy-day", tempHigh: 61, tempLow: 41, time: "Wednesday" }
    ]
    const result = weeklyReducer([], mockAction)
    expect(result).toEqual(expected)
  })

})
