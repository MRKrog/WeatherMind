import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from './Loading';

describe('Loading', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Loading />
    )
  })

  it('should match the snapshot index is 0 aka "NOW" ', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
