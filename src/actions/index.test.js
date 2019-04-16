import * as actions from './index'

describe('actions', () => {

  it('should have a type of SET_WEATHER', () => {
    const weather = {tpye: 'cold', temp: 20}
    const expectedAction = {
      type: "SET_WEATHER",
      weather
    }
    const result = actions.setWeather(weather)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_CURRENT', () => {
    const info = {tpye: 'cold', temp: 20}
    const expectedAction = {
      type: "SET_CURRENT",
      info
    }
    const result = actions.setCurrent(info)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_DETAILS', () => {
    const details = {tpye: 'cold', temp: 20}
    const expectedAction = {
      type: "SET_DETAILS",
      details
    }
    const result = actions.setDetails(details)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_HOURLY', () => {
    const info = {tpye: 'cold', temp: 20}
    const expectedAction = {
      type: "SET_HOURLY",
      info
    }
    const result = actions.setHourly(info)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_TODAY', () => {
    const info = {tpye: 'cold', temp: 20}
    const expectedAction = {
      type: "SET_TODAY",
      info
    }
    const result = actions.setToday(info)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_WEEK', () => {
    const info = {tpye: 'cold', temp: 20}
    const expectedAction = {
      type: "SET_WEEK",
      info
    }
    const result = actions.setWeek(info)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_ERROR', () => {
    const error = 'Bad Fetch Call';
    const expectedAction = {
      type: "SET_ERROR",
      error
    }
    const result = actions.setError(error)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_LOADING', () => {
    const loading = true;
    const expectedAction = {
      type: "SET_LOADING",
      loading
    }
    const result = actions.setLoading(loading)
    expect(result).toEqual(expectedAction)
  })

})
