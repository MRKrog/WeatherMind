import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types'
// import img from './media/icons'
// let images = require.context('../../media/icons', true);
import clearNight from '../../media/icons/clear-night.png';

export const HourDetail = ({ time, icon, temperature }) => {

  // let iconUpdate = icon.toUpperCase().replace(/-/g, "_");
  console.log(icon);
  // let img_src = images()
  return (
    <div className="HourDetail">
      <h4>{time}</h4>
      <div className="weatherIcon">
        <span className={icon}></span>
        <img src={icon === 'clear-night' ? clearNight : null} />
      </div>
      <h3>{temperature}</h3>
    </div>
  )

}


// CLEAR_DAY
// CLEAR_NIGHT
// PARTLY_CLOUDY_DAY
// PARTLY_CLOUDY_NIGHT
// CLOUDY
// RAIN
// SLEET
// SNOW
// WIND
// FOG
