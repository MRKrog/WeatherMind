export const hourlyReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_HOURLY":
      return action.info
      break;
    default:
      return state
  }
} 
