import React from 'react';
import PropTypes from 'prop-types';
import { findIcon } from '../../utility/findIcon';

export const WeekDetail = ({ time, tempHigh, tempLow, icon }) => {

  let iconImage = findIcon(icon);

  return (
    <div className="WeekDetail">
      <h5 className="todayDay">{time}</h5>
      <div className="weatherIcon">
        <img alt={icon} src={iconImage} />
      </div>
      <section className="tempLevels">
        <h6 className="tempHigh">{tempHigh}</h6>
        <h6 className="tempLow">{tempLow}</h6>
      </section>
    </div>
  )
}

WeekDetail.propTypes = {
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tempHigh: PropTypes.number.isRequired,
  tempLow: PropTypes.number.isRequired,
}
