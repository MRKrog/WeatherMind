import React, { Component } from 'react';
import { WeatherDetails, mapStateToProps } from './WeatherDetails';
import { shallow } from 'enzyme';

const mockTodayData = {
  humidity: 39,
  moonPhase: 33,
  precipProbability: 13,
  summary: "Partly cloudy throughout the day.",
  sunriseTime: "6:24 AM",
  sunsetTime: "7:37 PM",
  tempHigh: 67,
  tempLow: 40,
  time: "Sunday",
  uvIndex: 6,
  visibility: 4.32,
  windSpeed: 1.24,
}

describe('WeatherDetails', () => {

  describe('WeatherDetails Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <WeatherDetails today={mockTodayData}/>
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should ', () => {

    })
  })

})
