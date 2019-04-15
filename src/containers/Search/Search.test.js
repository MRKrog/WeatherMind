import React, { Component } from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

const mockLocation = {
  geometry: {
    location: { lat(){ return 34 }, lng(){ return 45 } }
  }
}

describe('Search', () => {
  let wrapper;
  let mockHandleSearch = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Search handleSearch={mockHandleSearch} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleSearch when handleSeleted is invoked', () => {
    const mockLatitude = 34;
    const mockLongitude = 45;

    const instance = wrapper.instance();
    instance.handleSeleted(mockLocation)
    expect(mockHandleSearch).toHaveBeenCalledWith(mockLatitude, mockLongitude)
  })

  it.skip('should call handleSelect when Autocomplete is clicked', () => {
    const btn = wrapper.find('.Autocomplete')
    const instance = wrapper.instance();
    const spy = spyOn(instance, 'handleSeleted')
    btn.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

})
