import moment from "moment";

export const cleanCurrently = (data) => {
  const { currently } = data
  return {
    time: currently.time,
    icon: currently.icon,
    summary: currently.summary,
    apparentTemperature: Math.round(currently.apparentTemperature),
    temperature: Math.round(currently.temperature),
    visibility: currently.visibility,
    humidity: currently.humidity,
    windSpeed: currently.windSpeed,
    pressure: currently.pressure,
    uvIndex: currently.uvIndex
  }
}

export const cleanHourly = (report) => {
  const hourlyArray = report.data.reduce((acc, hour, idx) => {
    if(idx < 24) {
      let info = {
        time: moment.unix(hour.time).format("HH"),
        icon: hour.icon,
        temperature: Math.round(hour.temperature),
      }
      acc.push(info)
    }
    return acc
  },[])
  return hourlyArray;
}

export const cleanToday = (report) => {
  const today = report.data[0];
  return {
    time: moment.unix(today.time).format("dddd"),
    tempHigh: Math.round(today.temperatureHigh),
    tempLow: Math.round(today.temperatureLow),
    summary: today.summary,
    sunriseTime: moment.unix(today.sunriseTime).format("LT"),
    sunsetTime:  moment.unix(today.sunsetTime).format("LT"),
    windSpeed: today.windSpeed,
    humidity: today.humidity * 100,
    visibility: today.visibility,
    uvIndex: today.uvIndex,
    precipProbability: today.precipProbability * 100,
    moonPhase: today.moonPhase * 100,
  }
}

export const cleanWeek = (report) => {
  const weeklyArray = report.data.reduce((acc, day, idx) => {
    if(idx > 0) {
      let info = {
        time: moment.unix(day.time).format("dddd"),
        tempHigh: Math.round(day.temperatureHigh),
        tempLow: Math.round(day.temperatureLow),
        icon: day.icon,
      }
      acc.push(info)
    }
    return acc
  },[])
  return weeklyArray;
}
