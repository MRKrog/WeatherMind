import React, { Component } from 'react';
import { CurrentDisplay, mapStateToProps } from './CurrentDisplay';
import { shallow } from 'enzyme';

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
const mockDetails = {
  city: "Denver",
  state: "Colorado",
  street: "1331 17th Street",
}
const mockToday = {
  humidity: 28.4,
  moonPhase: 37,
  precipProbability: 4 ,
  summary: "Mostly cloudy throughout the day.",
  sunriseTime: "6:23 AM",
  sunsetTime: "7:38 PM",
  tempHigh: 74,
  tempLow: 45,
  time: "Monday",
  uvIndex: 5,
  visibility: 6.75,
  windSpeed: 1.63,
}

describe('CurrentDisplay', () => {

  describe('CurrentDisplay Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CurrentDisplay current={mockCurrent} details={mockDetails} today={mockToday} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

  })

  describe('mapStateToProps', () => {

    it('should return an object with the today weather object', () => {
      const mockState = {
        today: {
          humidity: 28.4,
          moonPhase: 37,
          precipProbability: 4 ,
        },
        filter: "SET_TODAY"
      }
      const expected = {
        today: {
          humidity: 28.4,
          moonPhase: 37,
          precipProbability: 4 ,
        },
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

    it('should return an object with the current weather object', () => {
      const mockState = {
        current: {
          apparentTemperature: 73,
          humidity: 0.15,
          icon: "partly-cloudy-day",
        },
        filter: 'SET_CURRENT'
      }
      const expected = {
        current: {
          apparentTemperature: 73,
          humidity: 0.15,
          icon: "partly-cloudy-day",
        }
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

    it('should return an object with the details weather object', () => {
      const mockState = {
        details: {
          city: "Denver",
          state: "Colorado",
          street: "1331 17th Street",
        },
        filter: "SET_DETAILS"
      }
      const expected = {
        details: {
          city: "Denver",
          state: "Colorado",
          street: "1331 17th Street",
        }
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
    
  })

})
