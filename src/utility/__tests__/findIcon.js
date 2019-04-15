import { findIcon } from '../findIcon';

describe('findIcon', () => {

  it('should return clear-day.svg when clear-day is passed through', () => {
    const result = findIcon('clear-day')
    expect(result).toEqual("clear-day.svg")
  })

  it('should return clear-night.svg when clear-night is passed through', () => {
    const result = findIcon('clear-night')
    expect(result).toEqual("clear-night.svg")
  })

  it('should return partly-cloudy-day.svg when partly-cloudy-day is passed through', () => {
    const result = findIcon('partly-cloudy-day')
    expect(result).toEqual("partly-cloudy-day.svg")
  })

  it('should return partly-cloudy-night.svg when partly-cloudy-night is passed through', () => {
    const result = findIcon('partly-cloudy-night')
    expect(result).toEqual("partly-cloudy-night.svg")
  })

  it('should return cloudy.svg when cloudy is passed through', () => {
    const result = findIcon('cloudy')
    expect(result).toEqual("cloudy.svg")
  })

  it('should return rain.svg when rain is passed through', () => {
    const result = findIcon('rain')
    expect(result).toEqual("rain.svg")
  })

  it('should return sleet.svg when sleet is passed through', () => {
    const result = findIcon('sleet')
    expect(result).toEqual("sleet.svg")
  })

  it('should return snow.svg when snow is passed through', () => {
    const result = findIcon('snow')
    expect(result).toEqual("snow.svg")
  })

  it('should return wind.svg when wind is passed through', () => {
    const result = findIcon('wind')
    expect(result).toEqual("wind.svg")
  })

  it('should return fog.svg when fog is passed through', () => {
    const result = findIcon('fog')
    expect(result).toEqual("fog.svg")
  })

  it('should return cloudy.svg when nothing can be found that is passed through', () => {
    const result = findIcon()
    expect(result).toEqual("cloudy.svg")
  })

})
