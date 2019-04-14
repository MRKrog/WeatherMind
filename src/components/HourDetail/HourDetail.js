import React from 'react';
import PropTypes from 'prop-types';

import clearNight from '../../media/icons/clear-night.svg';
import clearDay from '../../media/icons/clear-day.svg';
import partlyCloudyDay from '../../media/icons/partly-cloudy-day.svg';
import partlyCloudyNight from '../../media/icons/partly-cloudy-night.svg';
import cloudy from '../../media/icons/cloudy.svg';
import rain from '../../media/icons/rain.svg';
import sleet from '../../media/icons/sleet.svg';
import snow from '../../media/icons/snow.svg';
import wind from '../../media/icons/wind.svg';
import fog from '../../media/icons/fog.svg';

export const HourDetail = ({ time, icon, temperature, index }) => {

  let iconImage = '';

  console.log(icon);

  switch (icon) {
    case 'clear-day':
      iconImage = clearDay
      break;
    case 'clear-night':
      iconImage = clearNight
      break;
    case 'partly-cloudy-day':
      iconImage = partlyCloudyDay
      break;
    case 'partly-cloudy-night':
      iconImage = partlyCloudyNight
      break;
    case 'cloudy':
      iconImage = cloudy
      break;
    case 'rain':
      iconImage = rain
      break;
    case 'sleet':
      iconImage = sleet
      break;
    case 'snow':
      iconImage = snow
      break;
    case 'wind':
      iconImage = wind
      break;
    case 'fog':
      iconImage = fog
      break;
    default:
      iconImage = cloudy
      break;
  }


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
