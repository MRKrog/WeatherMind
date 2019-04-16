import React, { Component } from 'react';
import { HourlyDisplay, mapStateToProps } from './HourlyDisplay';
import { shallow } from 'enzyme';

const mockHourlyData = [
  {time: "20", icon: "partly-cloudy-night", temperature: 63},
  {time: "21", icon: "cloudy", temperature: 60},
  {time: "22", icon: "partly-cloudy-night", temperature: 56}
]

describe('HourlyDisplay', () => {

  describe('HourDisplay Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<HourlyDisplay hourly={mockHourlyData} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

  })


  describe('mapStateToProps', () => {

    it('should return an object with the hourly array of weather', () => {})
      const mockState = {
        hourly: [
          {time: "20", icon: "partly-cloudy-night", temperature: 63},
          {time: "21", icon: "cloudy", temperature: 60},
          {time: "22", icon: "partly-cloudy-night", temperature: 56}
        ],
        filter: "SET_HOURLY"
      }
      const expected = {
        hourly: [
          {time: "20", icon: "partly-cloudy-night", temperature: 63},
          {time: "21", icon: "cloudy", temperature: 60},
          {time: "22", icon: "partly-cloudy-night", temperature: 56}
        ],
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
  })

})
