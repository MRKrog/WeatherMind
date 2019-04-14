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
      break;
    case 'clear-night':
      return clearNight
      break;
    case 'partly-cloudy-day':
      return partlyCloudyDay
      break;
    case 'partly-cloudy-night':
      return partlyCloudyNight
      break;
    case 'cloudy':
      return cloudy
      break;
    case 'rain':
      return rain
      break;
    case 'sleet':
      return sleet
      break;
    case 'snow':
      return snow
      break;
    case 'wind':
      return wind
      break;
    case 'fog':
      return fog
      break;
    default:
      return cloudy
      break;
  }
}
