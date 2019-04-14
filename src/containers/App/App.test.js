import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { setCurrent, setDetails, setHourly, setToday, setWeek } from '../../actions/index';
import { cleanCurrently, cleanHourly, cleanToday, cleanWeek } from '../../utility/cleanReports';

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


describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockSetCurrent = jest.fn()
    let mockSetDetails = jest.fn()
    let mockSetHourly = jest.fn()
    let mockSetToday = jest.fn()
    let mockSetWeekly = jest.fn()

    beforeEach(() => {
      wrapper = shallow(
        <App setCurrent={mockSetCurrent}
             setDetails={mockSetDetails}
             setHourly={mockSetHourly}
             setToday={mockSetToday}
             setWeekly={mockSetWeekly}
        />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it('should have a default state', () => {
      expect(wrapper.state()).toEqual({
        loading: true,
      })
    })

    it('should invoke the getUserLocation method when componentDidMount fires', () => {
      const instance = wrapper.instance()
      const spy = spyOn(instance, 'getUserLocation');
      wrapper.instance().componentDidMount()
      expect(spy).toHaveBeenCalled()
    });

    it('should', () => {})

    it('should', () => {})

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
