export const hourlyReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_HOURLY":
      return action.info
    default:
      return state
  }
}
