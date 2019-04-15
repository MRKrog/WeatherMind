import clearNight from '../media/icons/clear-night.svg';
import clearDay from '../media/icons/clear-day.svg';
import partlyCloudyDay from '../media/icons/partly-cloudy-day.svg';
import partlyCloudyNight from '../media/icons/partly-cloudy-night.svg';
import cloudy from '../media/icons/cloudy.svg';
import rain from '../media/icons/rain.svg';
import sleet from '../media/icons/sleet.svg';
import snow from '../media/icons/snow.svg';
import wind from '../media/icons/wind.svg';
import fog from '../media/icons/fog.svg';

export const findIcon = (icon) => {
  switch (icon) {
    case 'clear-day':
      return clearDay
    case 'clear-night':
      return clearNight
    case 'partly-cloudy-day':
      return partlyCloudyDay
    case 'partly-cloudy-night':
      return partlyCloudyNight
    case 'cloudy':
      return cloudy
    case 'rain':
      return rain
    case 'sleet':
      return sleet
    case 'snow':
      return snow
    case 'wind':
      return wind
    case 'fog':
      return fog
    default:
      return cloudy
  }
}
