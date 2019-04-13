import React from 'react';

export const WeekDetail = ({ time, tempHigh, tempLow, icon }) => {

  return (
    <div className="WeekDetail">
      <h5 className="todayDay">{time}</h5>
      <div className="weatherIcon">
        <span className={icon}></span>
      </div>
      <section className="tempLevels">
        <h6 className="tempHigh">{tempHigh}</h6>
        <h6 className="tempLow">{tempLow}</h6>
      </section>
    </div>
  )
}
