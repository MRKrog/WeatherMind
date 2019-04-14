import React from 'react';
import { shallow } from 'enzyme';
import { HourDetail } from './HourDetail';

describe('HourDetail', () => {
  let wrapper;
  let mockIcon = "partly-cloudy-night";
  let mockIndex = 0;
  let mockTemperature = 45;
  let mockTime = "04"

  beforeEach(() => {
    wrapper = shallow(
      <HourDetail icon={mockIcon}
                  index={mockIndex}
                  temperature={mockTemperature}
                  time={mockTime}
      />
    )
  })

  it('should match the snapshot index is 0 aka "NOW" ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot for all other times', () => {
    let additionalIndex = 10
    wrapper = shallow(
      <HourDetail icon={mockIcon}
                  index={additionalIndex}
                  temperature={mockTemperature}
                  time={mockTime}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

});
