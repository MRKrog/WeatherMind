import React from 'react';
import { shallow } from 'enzyme';
import { WeekDetail } from './WeekDetail';

describe('WeekDetail', () => {
  let wrapper;
  let mockIcon = "fog";
  let mockTempHigh = 45;
  let mockTempLow = 15;
  let mockTime = "04"

  beforeEach(() => {
    wrapper = shallow(
      <WeekDetail icon={mockIcon}
                  tempHigh={mockTempHigh}
                  tempLow={mockTempLow}
                  time={mockTime}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
