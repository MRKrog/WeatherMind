import { combineReducers } from 'redux';

import { todayReducer } from './todayReducer';
import { currentlyReducer } from './currentlyReducer';
import { detailsReducer } from './detailsReducer';
import { hourlyReducer } from './hourlyReducer';
import { weeklyReducer } from './weeklyReducer'

export const rootReducer = combineReducers({
  today: todayReducer,
  current: currentlyReducer,
  details: detailsReducer,
  hourly: hourlyReducer,
  weekly: weeklyReducer,
})
