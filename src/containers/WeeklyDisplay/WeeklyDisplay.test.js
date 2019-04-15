import React, { Component } from 'react';
import { WeeklyDisplay, mapStateToProps } from './WeeklyDisplay';
import { shallow } from 'enzyme';

const mockWeeklyData = [
    { icon: "partly-cloudy-day", tempHigh: 74, tempLow: 44, time: "Monday" },
    { icon: "partly-cloudy-day", tempHigh: 71, tempLow: 44, time: "Tuesday" },
    { icon: "partly-cloudy-day", tempHigh: 58, tempLow: 37, time: "Wednesday" },
    { icon: "snow", tempHigh: 60, tempLow: 38, time: "Thursday" },
    { icon: "clear-day", tempHigh: 73, tempLow: 45, time: "Friday" },
    { icon: "partly-cloudy-night", tempHigh: 78, tempLow: 48, time: "Saturday" },
    { icon: "rain", tempHigh: 61, tempLow: 41, time: "Sunday" },
  ]


describe('WeeklyDisplay', () => {

  describe('WeeklyDisplay Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<WeeklyDisplay weekly={mockWeeklyData} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

    it('should return an object with the today array’', () => {

    })

  })

})
