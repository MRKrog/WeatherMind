import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setCurrent, setDetails, setHourly, setToday, setWeek, setLoading, setError } from '../../actions/index';
import { cleanCurrently, cleanHourly, cleanToday, cleanWeek } from '../../utility/cleanReports';
jest.mock('../../utility/cleanReports')

const mockGeolocation = {
  getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
      coords: {
        latitude: 51.1,
        longitude: 45.3
      }
    })))
};
global.navigator.geolocation = mockGeolocation;

let mockData = [
  {
    currently: {time: 1555297549, summary: "Mostly Cloudy" },
    hourly: { summary: "Mostly cloudy throughout the day.", icon: "partly-cloudy-day" },
    daily: { icon: "rain", data: [ {icon: "partly-cloudy-day", moonPhase: 0.33} ] },
    latitude: 51.1,
    longitude: 45.3
  },
  { city: "Denver", state: "Colorado", street: "3783 South Fenton Way" }
]

describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockSetCurrent = jest.fn()
    let mockSetDetails = jest.fn()
    let mockSetHourly = jest.fn()
    let mockSetToday = jest.fn()
    let mockSetWeekly = jest.fn()
    let mockSetLoading = jest.fn()
    let mockSetError = jest.fn()

    let mockUrl = "http://localhost:3001/api/v1/weather/51.1/45.3"
    let mockLatitude = 51.1;
    let mockLongitude = 45.3;

    beforeEach(() => {
      wrapper = shallow(
        <App setCurrent={mockSetCurrent}
             setDetails={mockSetDetails}
             setHourly={mockSetHourly}
             setToday={mockSetToday}
             setWeekly={mockSetWeekly}
             setLoading={mockSetLoading}
             setError={mockSetError}
        />
      )

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      }))

    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should invoke the getUserLocation method when componentDidMount fires', () => {
      const instance = wrapper.instance()
      const spy = spyOn(instance, 'getUserLocation');
      wrapper.instance().componentDidMount()
      expect(spy).toHaveBeenCalled()
    });

    it('should call cleanCurrently and setCurrent mock dispatch when getWeather is invoked', async () => {
      await wrapper.instance().getWeather(mockLatitude, mockLongitude)
      const mockCleanData = {"currently": {"summary": "Mostly Cloudy", "time": 1555297549}, "daily": {"data": [{"icon": "partly-cloudy-day", "moonPhase": 0.33}], "icon": "rain"}, "hourly": {"icon": "partly-cloudy-day", "summary": "Mostly cloudy throughout the day."}, "latitude": 51.1, "longitude": 45.3}
      expect(cleanCurrently).toHaveBeenCalledWith(mockCleanData)
      expect(mockSetCurrent).toHaveBeenCalled()
    })

    it('should call cleanHourly and setHourly mock dispatch when getWeather is invoked', async () => {
      await wrapper.instance().getWeather(mockLatitude, mockLongitude)
      const mockHourlyData = {"icon": "partly-cloudy-day", "summary": "Mostly cloudy throughout the day."}
      expect(cleanHourly).toHaveBeenCalledWith(mockHourlyData)
      expect(mockSetHourly).toHaveBeenCalled()
    })

    it('should call cleanToday and mockSetToday mock dispatch when getWeather is invoked', async () => {
      await wrapper.instance().getWeather(mockLatitude, mockLongitude)
      const mockTodayData = {"data": [{"icon": "partly-cloudy-day", "moonPhase": 0.33}], "icon": "rain"}
      expect(cleanToday).toHaveBeenCalledWith(mockTodayData)
      expect(mockSetToday).toHaveBeenCalled()
    })

    it('should call cleanWeek and setWeekly mock dispatch when getWeather is invoked', async () => {
      await wrapper.instance().getWeather(mockLatitude, mockLongitude)
      const mockWeeklyData = {"data": [{"icon": "partly-cloudy-day", "moonPhase": 0.33}], "icon": "rain"}
      expect(cleanWeek).toHaveBeenCalledWith(mockWeeklyData)
      expect(mockSetWeekly).toHaveBeenCalled()
    })

    it('should call setDetails mock dispatch when getWeather is invoked', async () => {
      await wrapper.instance().getWeather(mockLatitude, mockLongitude)
      const mockDetails = { city: "Denver", state: "Colorado", street: "3783 South Fenton Way" }
      expect(mockSetDetails).toHaveBeenCalledWith(mockDetails)
    })

    it('should throw an error when the fetch call is bad when getWeather is invoked', async () => {
      window.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch Call Cannot Be Made')))
      await wrapper.instance().getWeather(mockLatitude, mockLongitude)
      expect(mockSetError).toHaveBeenCalledWith("Fetch Call Cannot Be Made")
    })

    it('should change state of loading to false when getWeather is invoked', async () => {
      await wrapper.instance().getWeather(mockLatitude, mockLongitude)
      expect(mockSetLoading).toHaveBeenCalledWith(false)
    })

    it('should call fetch with mockUrl when getWeather is invoked', async () => {
      wrapper.instance().getWeather(mockLatitude, mockLongitude)
      expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/weather/51.1/45.3")
    })

    it('should call getWeather when handleSearch is invoked', () => {
      const instance = wrapper.instance()
      const spy = spyOn(instance, 'getWeather');
      wrapper.instance().handleSearch(mockLatitude, mockLongitude)
      expect(spy).toHaveBeenCalledWith(mockLatitude, mockLongitude)
    })

    it('should match the snapshot when loading is false', () => {
      wrapper.setState({ loading: false })
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

    it('should ', () => {})

  })


  describe('mapDispatchToProps', () => {

    it('should call dispatch for setToday', () => {
      const mockData = 'Info'
      const mockDispatch = jest.fn();
      const actionToDispatch = setToday(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setToday(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch for setCurrent', () => {
      //Setup
      const mockData = "current weather";
      const mockDispatch = jest.fn();
      const actionToDispatch = setCurrent(mockData)
      //Execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrent(mockData);
      //Expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch for setDetails', () => {
      //Setup
      const mockData = "details weather";
      const mockDispatch = jest.fn();
      const actionToDispatch = setDetails(mockData);
      //Execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setDetails(mockData);
      //Expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch for setHourly', () => {
      const mockData = 'hourly weather';
      const mockDispatch = jest.fn()
      const actionToDispatch = setHourly(mockData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setHourly(mockData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch for setWeekly', () => {
      const mockData = 'weekly weather'
      const mockDispatch = jest.fn();
      const actionToDispatch = setWeek(mockData); //action

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setWeekly(mockData); // prop action

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })

});
