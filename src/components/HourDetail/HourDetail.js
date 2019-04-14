import React from 'react';
import PropTypes from 'prop-types';
import { findIcon } from '../../utility/findIcon';

export const HourDetail = ({ time, icon, temperature, index }) => {

  let iconImage = findIcon(icon);

  return (
    <div className="HourDetail">
      <h4>{index === 0 ? 'Now': time}</h4>
      <div className="weatherIcon">
        <img alt={icon} src={iconImage} />
      </div>
      <h3>{temperature}</h3>
    </div>
  )
}

HourDetail.propTypes = {
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
}
