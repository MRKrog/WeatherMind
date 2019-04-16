import React, { Component } from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';

jest.mock('moment', () => () => ({format: () => '14:26:37'}));

describe('Header', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})
