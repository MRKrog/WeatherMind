import { combineReducers } from 'redux';

import { todayReducer } from './todayReducer';
import { currentlyReducer } from './currentlyReducer';
import { detailsReducer } from './detailsReducer';
import { hourlyReducer } from './hourlyReducer';
import { weeklyReducer } from './weeklyReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  today: todayReducer,
  current: currentlyReducer,
  details: detailsReducer,
  hourly: hourlyReducer,
  weekly: weeklyReducer,
  loading: loadingReducer,
  error: errorReducer,
})
